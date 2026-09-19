import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vezza.studio"),
  title: "The Pleasure Manual for Men | The Clitoral Playbook",
  description: "A discreet, illustrated guide for men who want to understand women’s pleasure and replace guesswork with practical knowledge.",
  alternates: { canonical: "/" },
  openGraph: { title: "The Pleasure Manual for Men", description: "A discreet, illustrated guide to women’s pleasure, attention, and practical confidence.", type: "website", url: "/" },
  twitter: { card: "summary", title: "The Pleasure Manual for Men", description: "A discreet guide that turns guesswork into practical knowledge." },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
