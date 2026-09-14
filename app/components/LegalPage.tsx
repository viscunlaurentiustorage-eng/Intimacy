import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const seller = {
  name: "Viscun Laurentiu-Ion",
  street: "Moskauer Straße 83",
  city: "99427 Weimar",
  country: "Germany",
  email: "hello@noryspsychologie.de",
};

export function LegalPage({
  eyebrow,
  title,
  updated = "14 September 2026",
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="legal-home" href="/" aria-label="Return to The Clitoral Playbook">
          <span className="legal-home-icon"><Image src="/logoW.png" alt="" width={600} height={450} sizes="48px" /></span>
          <b>The Clitoral Playbook</b>
        </Link>
        <Link className="legal-back" href="/">Back to the book</Link>
      </header>

      <article className="legal-document">
        <div className="legal-title">
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <span>Last updated: {updated}</span>
        </div>
        <div className="legal-content">{children}</div>
      </article>

      <footer className="legal-footer">
        <p>© 2026 The Clitoral Playbook</p>
        <nav aria-label="Legal pages">
          <Link href="/impressum">Impressum</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/withdrawal">Withdrawal</Link>
          <Link href="/refund-policy">Refunds</Link>
        </nav>
      </footer>
    </main>
  );
}

export function SellerAddress() {
  return (
    <address>
      {seller.name}<br />
      {seller.street}<br />
      {seller.city}<br />
      {seller.country}<br />
      Email: <a href={`mailto:${seller.email}`}>{seller.email}</a>
    </address>
  );
}
