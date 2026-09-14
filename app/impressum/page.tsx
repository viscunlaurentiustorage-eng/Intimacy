import type { Metadata } from "next";
import { LegalPage, SellerAddress, seller } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum | The Clitoral Playbook",
  description: "Legal provider information for The Clitoral Playbook.",
};

export default function ImpressumPage() {
  return (
    <LegalPage eyebrow="Legal notice" title="Impressum">
      <section>
        <h2>Information pursuant to § 5 DDG</h2>
        <SellerAddress />
      </section>

      <section>
        <h2>Responsible for editorial content</h2>
        <p>Pursuant to § 18(2) MStV:</p>
        <p>{seller.name}<br />{seller.street}<br />{seller.city}<br />{seller.country}</p>
      </section>

      <section>
        <h2>Consumer dispute resolution</h2>
        <p>We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
      </section>

      <section>
        <h2>Content notice</h2>
        <p>The content of this website and The Clitoral Playbook is intended for consenting adults aged 18 and over. It is provided for general educational purposes and does not constitute medical advice, diagnosis, or treatment.</p>
      </section>
    </LegalPage>
  );
}
