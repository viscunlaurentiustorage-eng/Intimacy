import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vezza.studio"),
  title: "The Clitoral Playbook | Be the Reason She Says Don’t Stop",
  description: "Learn how to read her body, build anticipation, and turn nervous guesswork into calm, attentive confidence.",
  alternates: { canonical: "/" },
  openGraph: { title: "The Clitoral Playbook", description: "Be the reason she says don’t stop. Learn a responsive approach to pleasure and confidence.", type: "website", url: "/" },
  twitter: { card: "summary", title: "The Clitoral Playbook", description: "Turn guesswork into calm, attentive confidence." },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
