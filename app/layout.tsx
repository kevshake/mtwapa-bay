import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mtwapa Bay — Exceptional Luxury Residences",
  description:
    "Discover Africa's most distinguished residences. A curated portfolio of exceptional properties for the discerning buyer.",
  openGraph: {
    title: "Mtwapa Bay — Exceptional Luxury Residences",
    description:
      "Discover Africa's most distinguished residences. A curated portfolio of exceptional properties for the discerning buyer.",
    siteName: "Mtwapa Bay",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
