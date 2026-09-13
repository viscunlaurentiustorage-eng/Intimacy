import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Clit Runner | A Better Way to Pay Attention",
  description:
    "A warm, practical 37-page field guide to cunnilingus—built around consent, anatomy, comfort, and responsive communication.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
