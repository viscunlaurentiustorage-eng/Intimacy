import type { Metadata } from "next";
import { LegalPage, seller } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | The Clitoral Playbook",
  description: "Refund policy for The Clitoral Playbook digital edition.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage eyebrow="Purchase support" title="Refund Policy">
      <section>
        <h2>Digital purchases</h2>
        <p>Because The Clitoral Playbook is delivered as an immediately accessible digital product, purchases are generally final once the download or access has been provided and any applicable withdrawal right has expired.</p>
        <p>This policy does not limit any mandatory consumer right or statutory remedy available to you.</p>
      </section>

      <section>
        <h2>When we will help</h2>
        <p>Please contact us if:</p>
        <ul>
          <li>you were charged more than once for the same purchase;</li>
          <li>you paid but did not receive access;</li>
          <li>the supplied file is corrupted or cannot be opened; or</li>
          <li>the product is materially different from its description.</li>
        </ul>
        <p>Depending on the circumstances and applicable law, we will restore access, replace the file, correct the issue, or provide a refund.</p>
      </section>

      <section>
        <h2>Requesting support</h2>
        <p>Email <a href={`mailto:${seller.email}`}>{seller.email}</a> with the email address used at checkout, your order number, and a short description of the issue. Please do not send payment-card details.</p>
      </section>

      <section>
        <h2>Change-of-mind requests</h2>
        <p>Once immediate digital delivery has begun and the applicable withdrawal right has validly expired, we do not normally provide refunds for change of mind, failure to read the product description, or a personal preference about the educational content.</p>
      </section>
    </LegalPage>
  );
}
