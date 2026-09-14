import Image from "next/image";
import Script from "next/script";

const checkoutUrl = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_CHECKOUT_URL || "#offer";
const displayPrice = process.env.NEXT_PUBLIC_EBOOK_PRICE || "€19";
const hasCheckout = checkoutUrl.startsWith("http");

const responsiveSequence = [
  { number: "01", title: "Build", text: "Raise anticipation gradually before direct stimulation." },
  { number: "02", title: "Establish", text: "Begin with broad, comfortable contact and a relaxed rhythm." },
  { number: "03", title: "Focus", text: "Use controlled suction to concentrate intensity when arousal is high." },
  { number: "04", title: "Read", text: "Adjust pressure, pace, and position from the response—not from guesswork." },
  { number: "05", title: "Hold", text: "When the pattern works, protect it. Consistency becomes the skill." },
];

const chapters = [
  ["01", "Anatomy You Need to Target", "A clear map of the external and internal structures that shape sensation."],
  ["02", "The Build-Up Sequence", "A six-step progression from anticipation to direct contact."],
  ["03", "The Broad Flat Stroke", "The high-coverage foundation for slow, even stimulation."],
  ["04", "Focused Suction", "Lip position, seal control, pressure, rhythm, and four variations."],
  ["05", "Advanced Variations", "Edging, zone targeting, temperature, texture, and moisture."],
  ["06", "Combining Mouth and Hands", "Layer external and internal pressure while preserving rhythm."],
  ["07", "Pressure, Pace & Timing", "Know what to adjust, how much, and when to hold steady."],
  ["08", "Positioning & Endurance", "Improve access, neck comfort, hand freedom, and stamina."],
  ["09", "High-Impact Combinations", "Four complete sequences that bring every lesson together."],
];

const outcomes = [
  "Start slowly without wondering what comes next",
  "Use two dependable techniques with better control",
  "Make small, useful adjustments from real feedback",
  "Choose positions that protect comfort and stamina",
  "Combine mouth and hands without losing the rhythm",
  "Hold the exact pattern that is building the response",
];

const faqs = [
  ["Who is this for?", "Consenting adults, 18+, who want a clearer and more responsive approach to oral pleasure. It works as a structured foundation for beginners and as a precision refresher for experienced partners."],
  ["Is this just another list of tricks?", "No. The guide follows a system: anatomy, build-up, two core techniques, refinements, combinations, control, positioning, and four complete sequences."],
  ["Will every technique work for every woman?", "No honest guide can promise that. Bodies and preferences differ. The playbook gives reliable starting points and teaches you to observe, communicate, adjust gradually, and keep what works."],
  ["How explicit is it?", "It uses direct adult educational language and includes simplified anatomy and technique illustrations. There is no explicit photography."],
  ["What exactly will I receive?", "A professionally designed 24-page PDF, delivered digitally after checkout and ready to read on a phone, tablet, or computer."],
  ["Is this medical advice?", "No. The Clitoral Playbook is adult educational content and is not a substitute for medical advice, diagnosis, or treatment."],
];

function Wordmark() {
  return <span className="wordmark"><b>TCP</b><span>The Clitoral<br />Playbook</span></span>;
}

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" /></svg>;
}

function BuyButton({ label = "Get instant access", light = false }: { label?: string; light?: boolean }) {
  return (
    <a className={`button ${light ? "button-light" : ""} ${hasCheckout ? "lemonsqueezy-button" : ""}`} href={checkoutUrl}>
      <span>{label}</span><Arrow />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      {hasCheckout && <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" />}

      <header className="site-header">
        <a href="#top" aria-label="The Clitoral Playbook home"><Wordmark /></a>
        <nav aria-label="Main navigation">
          <a href="#method">The method</a><a href="#inside">Inside</a><a href="#preview">Preview</a>
        </nav>
        <a className={`header-cta ${hasCheckout ? "lemonsqueezy-button" : ""}`} href={checkoutUrl}>Get the playbook <Arrow /></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span />A practical guide for attentive lovers</p>
          <h1>Stop guessing.<br /><em>Learn what works.</em></h1>
          <p className="hero-lead">A concise, visual playbook for better oral technique—anatomy, build-up, pressure, pace, positioning, and four complete sequences you can actually remember.</p>
          <div className="hero-actions"><BuyButton /><a className="text-link" href="#preview">Preview the book <span>↓</span></a></div>
          <div className="trust-row" aria-label="Purchase details"><span><b>24</b> designed pages</span><span><b>9</b> focused chapters</span><span><b>4</b> complete sequences</span></div>
        </div>

        <div className="hero-visual">
          <span className="orbit orbit-one" /><span className="orbit orbit-two" />
          <p className="margin-note">Read the response.<br />Then hold what works.</p>
          <div className="book-object"><Image src="/book/clitoral-playbook-cover.jpg" alt="The Clitoral Playbook ebook cover" fill priority sizes="(max-width: 760px) 76vw, 34vw" /></div>
          <div className="edition-stamp"><strong>Digital</strong><span>Edition · 2026</span></div>
        </div>
      </section>

      <section className="assurance-strip" aria-label="Product assurances"><span>Secure Lemon Squeezy checkout</span><i /><span>Instant digital delivery</span><i /><span>Discreet adult education</span><i /><span>One-time payment</span></section>

      <section className="problem section-shell">
        <div className="section-index">01 / Why this exists</div>
        <div className="problem-copy"><h2>More moves are not the answer.</h2><p className="large-copy">Most people learn oral sex through fragments—a tip here, a past partner there, and plenty of silent uncertainty.</p><div className="problem-columns"><p>The real difficulty is not a shortage of techniques. It is not knowing what to do first, what to adjust, or when to stay exactly where you are.</p><p>The Clitoral Playbook replaces random improvisation with a clear progression you can adapt to the person in front of you.</p></div></div>
      </section>

      <section className="method" id="method">
        <div className="method-heading section-shell"><div className="section-index light">02 / The method</div><div><p className="eyebrow light"><span />The responsive sequence</p><h2>A sequence you can follow.<br /><em>A response you can read.</em></h2></div></div>
        <div className="sequence section-shell">{responsiveSequence.map((step) => <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
        <blockquote>“The highest skill is not performing more movements—it is knowing exactly when to hold steady.”</blockquote>
      </section>

      <section className="outcomes section-shell">
        <div className="section-index">03 / What changes</div>
        <div className="outcomes-body"><p className="eyebrow"><span />From uncertainty to control</p><h2>Finish the book knowing what to do next.</h2><div className="outcome-list">{outcomes.map((outcome, index) => <div key={outcome}><b>{String(index + 1).padStart(2, "0")}</b><p>{outcome}</p></div>)}</div></div>
      </section>

      <section className="preview" id="preview">
        <div className="preview-heading section-shell"><div className="section-index">04 / Real pages</div><div><p className="eyebrow"><span />Look inside</p><h2>See what you are buying.</h2><p>No mock content. These pages come directly from the final digital edition.</p></div></div>
        <div className="preview-rail">
          <figure><Image src="/book/table-of-contents.jpg" alt="The Clitoral Playbook table of contents" width={854} height={1334} sizes="(max-width: 760px) 79vw, 29vw" /><figcaption><span>01</span>Complete contents</figcaption></figure>
          <figure><Image src="/book/core-technique.jpg" alt="Preview of the broad flat stroke chapter" width={854} height={1334} sizes="(max-width: 760px) 79vw, 29vw" /><figcaption><span>02</span>Core technique</figcaption></figure>
          <figure><Image src="/book/high-impact-sequence.jpg" alt="Preview of a high-impact combination sequence" width={854} height={1334} sizes="(max-width: 760px) 79vw, 29vw" /><figcaption><span>03</span>Complete sequence</figcaption></figure>
        </div>
      </section>

      <section className="inside section-shell" id="inside">
        <div className="inside-intro"><div className="section-index">05 / Inside the playbook</div><div><p className="eyebrow"><span />Nine focused chapters</p><h2>The complete framework.<br />Nothing extra.</h2><p>Move from anatomy and build-up to technique, control, positioning, and complete start-to-finish sequences.</p></div></div>
        <div className="chapter-list">{chapters.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="fit">
        <div className="fit-inner section-shell"><div className="section-index light">06 / A clear fit</div><div className="fit-copy"><p className="eyebrow light"><span />This is for you if</p><h2>You care more about the response than the performance.</h2><ul><li>You want a calm, structured place to begin.</li><li>You have experience but want more consistency.</li><li>You want practical language without crude posturing.</li><li>You are willing to observe, ask, adapt, and slow down.</li></ul></div><div className="honest-note"><span>Worth knowing</span><p>No guide can make every body respond the same way. This one teaches strong starting points—and the attention required to personalize them.</p></div></div>
      </section>

      <section className="offer section-shell" id="offer">
        <div className="offer-visual"><div className="offer-book"><Image src="/book/clitoral-playbook-cover.jpg" alt="The Clitoral Playbook digital edition" fill sizes="(max-width: 760px) 62vw, 26vw" /></div></div>
        <div className="offer-copy"><p className="eyebrow light"><span />Instant digital access</p><h2>Become more precise.<br /><em>Stay more present.</em></h2><p className="offer-lead">Get the complete 24-page playbook and turn disconnected advice into one repeatable, responsive framework.</p><ul><li>9 focused chapters</li><li>2 foundational techniques</li><li>4 complete high-impact sequences</li><li>Anatomy and positioning illustrations</li><li>Pressure, pace, timing, and endurance guidance</li><li>Immediate PDF delivery after purchase</li></ul><div className="price-row"><div><small>Launch edition</small><strong>{displayPrice}</strong><span>One-time payment</span></div><BuyButton label="Get the playbook" light /></div><p className="secure-copy">Secure checkout powered by Lemon Squeezy · Adults 18+ · Digital product</p></div>
      </section>

      <section className="faq section-shell" id="questions">
        <div className="faq-intro"><div className="section-index">07 / Before you buy</div><p className="eyebrow"><span />Straight answers</p><h2>Questions are welcome.</h2></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <footer><Wordmark /><p>Precision over performance.</p><p>© 2026 · Adult education, not medical advice.</p></footer>

      <aside className="mobile-purchase" aria-label="Purchase The Clitoral Playbook"><div><span>Digital edition</span><strong>{displayPrice}</strong></div><a className={hasCheckout ? "lemonsqueezy-button" : ""} href={checkoutUrl}>Get the playbook <Arrow /></a></aside>
    </main>
  );
}
