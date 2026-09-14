import type { Metadata } from "next";
import { LegalPage, SellerAddress, seller } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | The Clitoral Playbook",
  description: "How personal data is handled on The Clitoral Playbook website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Your data" title="Privacy Policy">
      <section>
        <h2>1. Controller</h2>
        <p>The controller responsible for processing personal data on this website is:</p>
        <SellerAddress />
      </section>

      <section>
        <h2>2. Website hosting</h2>
        <p>This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit the website, technical information such as your IP address, browser type, operating system, referring page, requested files, and time of access may be processed in server logs to deliver and secure the website.</p>
        <p>The legal basis is our legitimate interest in providing a secure, reliable website under Article 6(1)(f) GDPR. Data may be processed outside the European Economic Area subject to the safeguards required by applicable data-protection law.</p>
      </section>

      <section>
        <h2>3. Purchases through Payhip</h2>
        <p>Purchase buttons take you to Payhip, an external checkout service operated by Payhip Limited. Payhip processes the information required to complete payment, deliver the digital product, prevent fraud, and meet tax and accounting obligations under its own privacy policy.</p>
        <p>We receive the order information needed to fulfil the contract and provide customer support. The legal bases are Article 6(1)(b) GDPR for contract performance and Article 6(1)(c) GDPR for legal obligations. Please review the privacy information presented by Payhip during checkout.</p>
      </section>

      <section>
        <h2>4. Contact by email</h2>
        <p>If you contact us at <a href={`mailto:${seller.email}`}>{seller.email}</a>, we process your message, contact details, and any information you provide to answer your request. The legal basis is Article 6(1)(b) GDPR where your request concerns a purchase or potential purchase, and otherwise Article 6(1)(f) GDPR.</p>
      </section>

      <section>
        <h2>5. Cookies and analytics</h2>
        <p>This landing page does not currently use advertising pixels, analytics tools, or non-essential cookies. The external Payhip checkout may use cookies after you follow a purchase link; Payhip is responsible for explaining and managing those technologies on its service.</p>
      </section>

      <section>
        <h2>6. Retention</h2>
        <p>We retain personal data only for as long as needed for the stated purpose. Order and accounting records may be retained for the periods required by German tax and commercial law. Support correspondence is deleted when it is no longer needed unless a legal retention obligation or legal claim requires longer storage.</p>
      </section>

      <section>
        <h2>7. Your rights</h2>
        <p>Subject to the conditions of the GDPR, you may request access, correction, deletion, restriction, data portability, or object to processing based on legitimate interests. Where processing is based on consent, you may withdraw it at any time for the future.</p>
        <p>You may also lodge a complaint with a data-protection supervisory authority. The competent authority for our establishment is the Thüringer Landesbeauftragte für den Datenschutz und die Informationsfreiheit.</p>
      </section>

      <section>
        <h2>8. Updates</h2>
        <p>We may update this policy when our website, service providers, or legal obligations change. The current version is always available on this page.</p>
      </section>
    </LegalPage>
  );
}
