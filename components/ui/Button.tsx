import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

export type ButtonVariant =
  | "primary"      // dusk fill — main CTA on light bg
  | "ocean"        // ocean fill — secondary CTA on light bg
  | "outline"      // dusk border — outlined on light bg
  | "outline-light"// white border — outlined on dark bg
  | "ghost";       // underline link-style on light bg

export type ButtonSize = "sm" | "md" | "lg";

const SIZE: Record<ButtonSize, string> = {
  sm: "px-6 py-2.5",
  md: "px-10 py-4",
  lg: "px-14 py-5",
};

const VARIANT: Record<ButtonVariant, string> = {
  primary:
    "bg-dusk text-cream border border-dusk hover:bg-ocean hover:border-ocean",
  ocean:
    "bg-ocean text-cream border border-ocean hover:bg-dusk hover:border-dusk",
  outline:
    "bg-transparent text-dusk border border-dusk hover:bg-dusk hover:text-cream",
  "outline-light":
    "bg-transparent text-white border border-white/50 hover:bg-white/10",
  ghost:
    "bg-transparent text-ocean border-0 border-b border-ocean pb-0.5 hover:opacity-60",
};

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
}

interface AsButton extends BaseProps, Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> {
  href?: never;
}

interface AsLink extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  disabled?: never;
  type?: never;
}

type Props = AsButton | AsLink;

export default function Button({ variant = "primary", size = "md", className = "", children, ...rest }: Props) {
  const cls = [
    "ds-btn",
    VARIANT[variant],
    variant !== "ghost" ? SIZE[size] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href) {
    const { href, target, rel } = rest as AsLink;
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);
    if (isExternal) {
      return (
        <a href={href} className={cls} target={target} rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} target={target}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = rest as AsButton;
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
