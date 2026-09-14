import type { Metadata } from "next";
import { LegalPage, SellerAddress } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Withdrawal Information | The Clitoral Playbook",
  description: "Consumer withdrawal information for The Clitoral Playbook digital edition.",
};

export default function WithdrawalPage() {
  return (
    <LegalPage eyebrow="Consumer information" title="Right of Withdrawal">
      <section>
        <h2>Your statutory right</h2>
        <p>If you are a consumer and a statutory withdrawal right applies, you generally have fourteen days to withdraw from a distance contract without giving a reason. The withdrawal period begins on the day the contract is concluded.</p>
      </section>

      <section>
        <h2>Digital content supplied immediately</h2>
        <p>For digital content not supplied on a physical medium, the right of withdrawal expires when performance begins if you have expressly agreed that delivery may begin before the withdrawal period ends, confirmed that you understand you will lose your right of withdrawal when performance begins, and the required contract confirmation has been provided to you.</p>
        <p>If these requirements have not been met, your statutory withdrawal rights remain unaffected.</p>
      </section>

      <section>
        <h2>How to exercise your right</h2>
        <p>To withdraw where a right still exists, send an unambiguous statement identifying your order and your decision to withdraw to:</p>
        <SellerAddress />
        <p>You may use the wording below, but it is not mandatory:</p>
        <div className="legal-callout">
          <p>I hereby withdraw from the contract concluded for the purchase of The Clitoral Playbook.</p>
          <p>Ordered on:<br />Name of consumer:<br />Address of consumer:<br />Email used for the order:<br />Date:</p>
        </div>
      </section>

      <section>
        <h2>Effects of withdrawal</h2>
        <p>If you validly withdraw, we will reimburse payments received from you without undue delay and no later than fourteen days after receiving your withdrawal notice, using the original payment method unless otherwise agreed.</p>
      </section>
    </LegalPage>
  );
}
