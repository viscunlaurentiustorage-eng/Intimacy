import Image from "next/image";
import Link from "next/link";

const checkoutUrl =
  process.env.NEXT_PUBLIC_PAYHIP_CHECKOUT_URL ||
  "https://payhip.com/buy?s=1&cart_links%5B%5D=035Rp&qty%5B035Rp%5D=1";
const displayPrice = process.env.NEXT_PUBLIC_EBOOK_PRICE || "$9.99";

const questions = [
  "Am I starting too directly?",
  "Should I change the pressure—or keep going?",
  "How do I use my hands without losing the rhythm?",
  "What position gives me control without exhausting me?",
];

const method = [
  { number: "01", title: "Understand", text: "Learn the anatomy that matters, what creates sensation, and why indirect stimulation often works better first." },
  { number: "02", title: "Build", text: "Follow a practical progression from anticipation to broad contact, focused stimulation, and complete sequences." },
  { number: "03", title: "Respond", text: "Read physical feedback, adjust one variable at a time, and recognize the moment to stop changing anything." },
];

const outcomes = [
  ["A calmer start", "Know how to build anticipation before direct contact."],
  ["Better control", "Understand pressure, pace, positioning, and endurance."],
  ["Less guesswork", "Use response—not performance—as your guide."],
  ["A repeatable plan", "Remember complete sequences when you need them."],
];

const contents = [
  ["Foundation", "Anatomy you need to target", "The six-step build-up sequence", "The broad flat stroke"],
  ["Precision", "Focused suction and four variations", "Advanced texture and temperature", "Pressure, pace, and timing"],
  ["Integration", "Combining mouth and hands", "Positioning and endurance", "Four high-impact combinations"],
];

const faqs = [
  ["Who is this for?", "Consenting adults, 18+, who want a clearer and more responsive approach to oral pleasure. It works as a structured starting point for beginners and as a precision refresher for experienced partners."],
  ["Is this just a list of tricks?", "No. The guide teaches one connected framework: understand the anatomy, build arousal gradually, use two foundational techniques, combine them intelligently, and adapt from feedback."],
  ["Will it work for every woman?", "No honest guide can promise that. Bodies and preferences differ. The playbook gives you reliable starting points and teaches you how to communicate, observe, and personalize them."],
  ["How explicit is the ebook?", "It uses direct adult educational language with simplified anatomy and technique illustrations. There is no explicit photography."],
  ["What exactly do I receive?", "A professionally designed 24-page PDF with nine focused chapters and four complete sequences. It is delivered digitally after checkout and can be read on a phone, tablet, or computer."],
  ["How does delivery work?", "Payhip provides your download immediately after payment and also sends a receipt with your access link to the email address used at checkout."],
  ["What if I cannot access the file?", "Email hello@noryspsychologie.de with your Payhip order number and the email used at checkout. We will help restore access or replace a faulty file."],
];

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5" /></svg>;
}

function Check() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>;
}

function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return <span className={`wordmark ${inverse ? "wordmark-inverse" : ""}`}><b>TCP</b><span>The Clitoral Playbook</span></span>;
}

function BuyButton({ label = `Get the playbook — ${displayPrice}`, inverse = false }: { label?: string; inverse?: boolean }) {
  return (
    <a className={`buy-button ${inverse ? "buy-button-inverse" : ""}`} href={checkoutUrl} target="_blank" rel="noreferrer">
      <span>{label}</span><Arrow />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top" className="home-page">
      <div className="age-strip"><span>For consenting adults 18+</span><span>Discreet educational guide</span></div>

      <header className="site-header">
        <a href="#top" aria-label="The Clitoral Playbook home"><Wordmark /></a>
        <nav aria-label="Main navigation"><a href="#inside">What&apos;s inside</a><a href="#preview">Preview</a><a href="#questions">Questions</a></nav>
        <a className="header-cta" href={checkoutUrl} target="_blank" rel="noreferrer">Get instant access <Arrow /></a>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span />A practical guide to better oral pleasure</p>
          <h1>Better technique starts with <em>paying attention.</em></h1>
          <p className="hero-lead">Stop collecting random tips. Learn a clear, responsive system for anatomy, build-up, pressure, pace, positioning, and knowing when to hold steady.</p>
          <div className="hero-actions"><BuyButton /><a className="preview-link" href="#preview">See real pages <span>↓</span></a></div>
          <div className="hero-proof" aria-label="Product information"><span><Check />24-page illustrated PDF</span><span><Check />Instant delivery</span><span><Check />One-time payment</span></div>
          <p className="checkout-note">Secure checkout powered by Payhip. Final total shown before payment.</p>
        </div>
        <div className="hero-product" aria-label="The Clitoral Playbook digital edition">
          <div className="hero-shape" />
          <div className="hero-book"><Image src="/book/clitoral-playbook-cover.jpg" alt="The Clitoral Playbook ebook cover" fill priority sizes="(max-width: 780px) 72vw, 34vw" /></div>
          <div className="hero-badge"><strong>9</strong><span>focused<br />chapters</span></div>
          <div className="hero-note">Practical. Visual.<br />Easy to remember.</div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Purchase assurances"><span>Instant PDF access</span><i /><span>Secure Payhip checkout</span><i /><span>No subscription</span><i /><span>Private, discreet purchase</span></section>

      <section className="recognition section-shell">
        <div className="recognition-heading"><p className="eyebrow"><span />The real problem</p><h2>It is not a shortage of moves. It is not knowing what to do next.</h2></div>
        <div className="question-stack">{questions.map((question, index) => <div key={question}><span>0{index + 1}</span><p>{question}</p></div>)}</div>
        <p className="recognition-close">The Clitoral Playbook turns those uncertain moments into a sequence you can understand, remember, and adapt to the person in front of you.</p>
      </section>

      <section className="method-section" id="method">
        <div className="method-intro section-shell"><p className="eyebrow eyebrow-light"><span />One responsive framework</p><h2>Learn the logic.<br />Not just the moves.</h2><p>Good technique is not a performance. It is a conversation between what you do and how the other person responds.</p></div>
        <div className="method-grid section-shell">{method.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <div className="method-quote section-shell"><span>Remember this</span><blockquote>“When the response gets stronger, consistency becomes the skill.”</blockquote></div>
      </section>

      <section className="preview-section" id="preview">
        <div className="preview-intro section-shell"><div><p className="eyebrow"><span />Look before you buy</p><h2>Real pages.<br />No vague promises.</h2></div><p>These previews come directly from the final 24-page edition, so you can see the writing, structure, and visual approach before purchasing.</p></div>
        <div className="preview-grid section-shell">
          <figure className="preview-card preview-card-one"><div><Image src="/book/table-of-contents.jpg" alt="Table of contents from The Clitoral Playbook" width={854} height={1334} sizes="(max-width: 780px) 82vw, 29vw" /></div><figcaption><span>01</span><b>The complete contents</b></figcaption></figure>
          <figure className="preview-card preview-card-two"><div><Image src="/book/core-technique.jpg" alt="Broad flat stroke technique page from The Clitoral Playbook" width={854} height={1334} sizes="(max-width: 780px) 82vw, 29vw" /></div><figcaption><span>02</span><b>A core technique</b></figcaption></figure>
          <figure className="preview-card preview-card-three"><div><Image src="/book/high-impact-sequence.jpg" alt="High-impact combination sequence from The Clitoral Playbook" width={854} height={1334} sizes="(max-width: 780px) 82vw, 29vw" /></div><figcaption><span>03</span><b>A complete sequence</b></figcaption></figure>
        </div>
        <div className="preview-cta section-shell"><p>You have seen the real product. Ready to read the rest?</p><BuyButton label={`Read the complete playbook — ${displayPrice}`} /></div>
      </section>

      <section className="outcomes-section section-shell">
        <div className="outcomes-heading"><p className="eyebrow"><span />What changes after reading</p><h2>More confidence.<br /><em>Less performing.</em></h2><p>You will not memorize dozens of tricks. You will understand a smaller number of useful decisions—and when to make them.</p></div>
        <div className="outcomes-grid">{outcomes.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="inside-section" id="inside">
        <div className="inside-shell section-shell">
          <div className="inside-heading"><p className="eyebrow eyebrow-light"><span />Inside the playbook</p><h2>Nine chapters.<br />One clear progression.</h2><p>Each part builds on the last, moving from understanding to technique and finally to complete combinations.</p></div>
          <div className="contents-grid">{contents.map(([group, ...items], index) => <article key={group}><div><span>0{index + 1}</span><h3>{group}</h3></div><ul>{items.map((item) => <li key={item}><Check />{item}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="honest-section section-shell">
        <div className="honest-card"><p className="eyebrow"><span />An honest promise</p><h2>No guide can make every body respond the same way.</h2><p>The value is not a guaranteed result. It is learning strong starting points, better observation, clearer communication, and the patience to personalize what you do.</p></div>
        <div className="fit-card"><h3>This is for you if…</h3><ul><li><Check />You want a calm, structured place to begin.</li><li><Check />You have experience but want more consistency.</li><li><Check />You prefer practical language over crude posturing.</li><li><Check />You are willing to observe, ask, adapt, and slow down.</li></ul></div>
      </section>

      <section className="offer-section section-shell" id="offer">
        <div className="offer-art"><div className="offer-book"><Image src="/book/clitoral-playbook-cover.jpg" alt="The Clitoral Playbook digital edition" fill sizes="(max-width: 780px) 58vw, 25vw" /></div><span>Digital edition</span></div>
        <div className="offer-copy"><p className="eyebrow eyebrow-light"><span />Start reading today</p><h2>Stop wondering.<br />Start understanding.</h2><p className="offer-lead">Get the complete visual framework in one concise PDF you can read privately and return to whenever you need it.</p><div className="offer-includes"><span><Check />24 designed pages</span><span><Check />9 focused chapters</span><span><Check />4 complete sequences</span><span><Check />Instant PDF delivery</span></div><div className="offer-price"><div><small>One-time payment</small><strong>{displayPrice}</strong></div><BuyButton label="Get instant access" inverse /></div><p className="offer-microcopy">Secure checkout via Payhip · No subscription · Adults 18+ · Final total shown before payment</p></div>
      </section>

      <section className="faq-section section-shell" id="questions">
        <div className="faq-heading"><p className="eyebrow"><span />Before you buy</p><h2>Straight answers.</h2><p>Everything you should know before purchasing the digital edition.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="closing-section section-shell"><p>Twenty-four pages. One clear framework.</p><h2>The next time you are close,<br /><em>you will know what to notice.</em></h2><BuyButton label={`Get the playbook — ${displayPrice}`} /></section>

      <footer className="site-footer">
        <div className="footer-brand"><Wordmark inverse /><p>Attention over performance.</p></div>
        <nav className="legal-links" aria-label="Legal information"><Link href="/impressum">Impressum</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/withdrawal">Withdrawal</Link><Link href="/refund-policy">Refunds</Link><a href="mailto:hello@noryspsychologie.de">Contact</a></nav>
        <p className="footer-note">© 2026 · For consenting adults 18+ · Educational content, not medical advice.</p>
      </footer>

      <aside className="mobile-purchase" aria-label="Purchase The Clitoral Playbook"><div><span>Instant PDF</span><strong>{displayPrice}</strong></div><a href={checkoutUrl} target="_blank" rel="noreferrer">Get the playbook <Arrow /></a></aside>
    </main>
  );
}
