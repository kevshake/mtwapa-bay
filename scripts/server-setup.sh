#!/usr/bin/env bash
# Run once on a fresh Ubuntu 22.04 server to set up the Mtwapa Bay production environment.
# Usage: bash server-setup.sh <domain> <deploy_user>
# Example: bash server-setup.sh mtwapabay.com mtwapa
set -euo pipefail

DOMAIN="${1:?Usage: $0 <domain> <deploy_user>}"
DEPLOY_USER="${2:?Usage: $0 <domain> <deploy_user>}"
APP_DIR="/var/www/$DOMAIN"
APP_PORT=3000

echo "==> Updating packages"
apt-get update -qq
apt-get upgrade -y -qq

echo "==> Installing Node.js 20"
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

echo "==> Installing PM2"
npm install -g pm2

echo "==> Installing Nginx & Certbot"
apt-get install -y nginx certbot python3-certbot-nginx

echo "==> Creating deploy user: $DEPLOY_USER"
id "$DEPLOY_USER" &>/dev/null || useradd -m -s /bin/bash "$DEPLOY_USER"

echo "==> Creating app directory"
mkdir -p "$APP_DIR"
chown "$DEPLOY_USER:$DEPLOY_USER" "$APP_DIR"

echo "==> Writing Nginx config for $DOMAIN"
cat > "/etc/nginx/sites-available/$DOMAIN" <<NGINX
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:$APP_PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
NGINX

ln -sf "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-enabled/$DOMAIN"
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

echo "==> Obtaining TLS certificate from Let's Encrypt"
certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos --email "hello@$DOMAIN" --redirect

echo "==> Enabling Certbot auto-renewal"
systemctl enable certbot.timer
systemctl start certbot.timer

echo "==> Setting up PM2 startup"
pm2 startup systemd -u "$DEPLOY_USER" --hp "/home/$DEPLOY_USER"
pm2 save

echo ""
echo "==> Server setup complete!"
echo "    App dir: $APP_DIR"
echo "    Domain:  https://$DOMAIN"
echo "    PM2 name: mtwapa"
echo ""
echo "Next steps:"
echo "  1. Set GitHub secrets: DEPLOY_HOST, DEPLOY_USER, DEPLOY_SSH_KEY, DEPLOY_PATH"
echo "  2. Push to main branch to trigger deployment"
