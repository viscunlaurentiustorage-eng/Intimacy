import type { Metadata } from "next";
import { LegalPage, SellerAddress } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Sale | The Clitoral Playbook",
  description: "Terms governing purchases of The Clitoral Playbook digital edition.",
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Purchase terms" title="Terms of Sale">
      <section>
        <h2>1. Seller and scope</h2>
        <p>These terms apply to purchases of the digital edition of The Clitoral Playbook from:</p>
        <SellerAddress />
        <p>Mandatory consumer protections that apply in your country remain unaffected.</p>
      </section>

      <section>
        <h2>2. Product and age requirement</h2>
        <p>The product is a downloadable PDF containing adult educational material about sexual pleasure. It is intended only for consenting adults aged 18 or over. It contains direct educational language and simplified illustrations, but no explicit photography.</p>
      </section>

      <section>
        <h2>3. Ordering and contract formation</h2>
        <p>Checkout, payment, and digital delivery are provided through Payhip. Product details, the final total, applicable taxes, accepted payment methods, and the binding order button are shown before you submit your order. A contract is formed when your order is accepted and you receive an order confirmation.</p>
      </section>

      <section>
        <h2>4. Price and payment</h2>
        <p>The advertised base price is US $9.99 as a one-time payment. Any applicable taxes and the final amount payable are displayed at checkout before purchase. Payment is processed through the payment methods offered by Payhip.</p>
      </section>

      <section>
        <h2>5. Digital delivery</h2>
        <p>After successful payment, access to the PDF is normally provided immediately through the checkout confirmation and/or the email address supplied during purchase. You are responsible for entering a valid email address and maintaining compatible software and a device capable of opening a standard PDF file.</p>
      </section>

      <section>
        <h2>6. Licence and permitted use</h2>
        <p>Your purchase grants you a personal, non-exclusive, non-transferable licence to download and use one copy for private purposes. You may not reproduce, resell, distribute, upload, publish, share, sublicense, or commercially exploit the ebook or substantial parts of it without prior written permission.</p>
      </section>

      <section>
        <h2>7. Right of withdrawal for digital content</h2>
        <p>If you are a consumer in the European Union or another jurisdiction providing a withdrawal right, the statutory rules apply. For digital content not supplied on a physical medium, your withdrawal right may expire once delivery begins, provided you expressly consented to immediate performance, acknowledged that this causes the loss of the withdrawal right, and received the legally required confirmation. Please see our Withdrawal Information.</p>
      </section>

      <section>
        <h2>8. Defects and support</h2>
        <p>Your statutory rights concerning defective digital products remain unaffected. If the download is unavailable, corrupted, incomplete, or materially different from its description, contact us so we can provide a replacement or another remedy required by law.</p>
      </section>

      <section>
        <h2>9. Educational disclaimer</h2>
        <p>The ebook provides general adult education. It does not provide medical, psychological, therapeutic, or relationship advice tailored to an individual. Results differ between people. Always obtain freely given consent, communicate with your partner, respect boundaries, and stop if anyone experiences pain or discomfort.</p>
      </section>

      <section>
        <h2>10. Liability</h2>
        <p>We are liable without limitation for intent and gross negligence, for injury to life, body, or health, and where liability is mandatory by law. For slight negligence involving an essential contractual obligation, liability is limited to the foreseeable damage typical for this type of contract. Otherwise, liability for slight negligence is excluded to the extent permitted by law.</p>
      </section>

      <section>
        <h2>11. Governing law</h2>
        <p>German law applies, excluding the UN Convention on Contracts for the International Sale of Goods. If you are a consumer habitually resident in another country, this choice does not deprive you of mandatory consumer protections in that country.</p>
      </section>
    </LegalPage>
  );
}
