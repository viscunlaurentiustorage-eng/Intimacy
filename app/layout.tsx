import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vezza.studio"),
  title: "The Pleasure Manual | Better Intimacy, Less Guesswork",
  description: "A private illustrated guide for men who want to understand female pleasure, communicate better, and become more attentive partners.",
  alternates: { canonical: "/" },
  openGraph: { title: "The Pleasure Manual", description: "A private illustrated guide to confidence, communication, and better intimacy.", type: "website", url: "/" },
  twitter: { card: "summary", title: "The Pleasure Manual", description: "A private guide that turns guesswork into practical knowledge." },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
