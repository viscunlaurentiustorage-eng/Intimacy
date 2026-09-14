import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vezza.studio"),
  title: "The Clitoral Playbook | Stop Guessing. Learn What Works.",
  description: "A practical 24-page guide to oral pleasure, better technique, pressure, timing, positioning, and reading her response.",
  alternates: { canonical: "/" },
  openGraph: { title: "The Clitoral Playbook", description: "Stop guessing. Learn a repeatable, responsive approach to better oral technique.", type: "website", url: "/" },
  twitter: { card: "summary", title: "The Clitoral Playbook", description: "A practical guide to better oral technique and reading her response." },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
