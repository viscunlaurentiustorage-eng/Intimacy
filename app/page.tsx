import Image from "next/image";
import Link from "next/link";

const checkoutUrl =
  process.env.NEXT_PUBLIC_PAYHIP_CHECKOUT_URL ||
  "https://payhip.com/buy?s=1&cart_links%5B%5D=035Rp&qty%5B035Rp%5D=1";
const displayPrice = process.env.NEXT_PUBLIC_EBOOK_PRICE || "$9.99";

const questions = [
  "Oh. He actually takes his time.",
  "He noticed that worked—and did not immediately change it.",
  "I do not have to give him turn-by-turn directions.",
  "Where exactly has this man been hiding?",
];

const method = [
  { number: "01", title: "Know where", text: "Understand the anatomy that matters, so your confidence comes from knowing—not from confidently guessing wrong." },
  { number: "02", title: "Build the tension", text: "Learn how to slow down, create anticipation, and make her want more before you give her more." },
  { number: "03", title: "Read the moment", text: "Notice what her body is telling you, adjust with purpose, and recognize the glorious moment to change absolutely nothing." },
];

const outcomes = [
  ["“He takes his time.”", "You stop rushing toward the main event and start making the build-up part of it."],
  ["“He actually notices.”", "You read her breathing, movement, and tension instead of performing a memorized routine."],
  ["“He did not change it. Thank God.”", "You gain the discipline to stay consistent when her response tells you it is working."],
  ["“Again” sounds promising.", "You become memorable for how understood she felt—not for how many tricks you attempted."],
];

const contents = [
  ["Foundation", "Anatomy you need to target", "The six-step build-up sequence", "The broad flat stroke"],
  ["Precision", "Focused suction and four variations", "Advanced texture and temperature", "Pressure, pace, and timing"],
  ["Integration", "Combining mouth and hands", "Positioning and endurance", "Four high-impact combinations"],
];

const faqs = [
  ["Who is this for?", "Consenting adults, 18+, especially men who want to replace nervous guesswork with calm, attentive confidence. It works as a clear starting point for beginners and a useful reset for experienced partners."],
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
  return (
    <span className={`wordmark ${inverse ? "wordmark-inverse" : ""}`}>
      <span className="wordmark-icon"><Image src="/logoW.png" alt="" width={600} height={450} sizes="48px" /></span>
      <span>The Clitoral Playbook</span>
    </span>
  );
}

function BuyButton({ label = `Learn the skill — ${displayPrice}`, inverse = false }: { label?: string; inverse?: boolean }) {
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
        <nav aria-label="Main navigation"><a href="#method">What you gain</a><a href="#preview">Preview</a><a href="#questions">Questions</a></nav>
        <a className="header-cta" href={checkoutUrl} target="_blank" rel="noreferrer">Learn the skill <Arrow /></a>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <h1>The pleasure manual <em>every man should read.</em></h1>
          <p className="hero-lead">A discreet, illustrated guide for men who want to understand women&apos;s pleasure, read her response, and replace guesswork with skill. Your tongue already has the equipment. This gives it a plan.</p>
          <div className="hero-actions"><BuyButton label={`Get the manual — ${displayPrice}`} /><a className="preview-link" href="#preview">Look inside <span>↓</span></a></div>
          <div className="hero-proof" aria-label="Product information"><span><Check />24 illustrated pages</span><span><Check />Instant PDF</span><span><Check />One payment</span></div>
          <p className="checkout-note">Secure checkout powered by Payhip. Final total shown before payment.</p>
        </div>
        <div className="hero-product" aria-label="The Clitoral Playbook digital edition">
          <div className="hero-shape" />
          <div className="hero-book"><Image src="/book/clitoral-playbook-cover.jpg" alt="The Clitoral Playbook ebook cover" fill loading="eager" sizes="(max-width: 780px) 72vw, 34vw" /></div>
          <div className="hero-badge"><strong>24</strong><span>clear<br />pages</span></div>
          <div className="hero-note">For curious minds.<br />And useful tongues.</div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Purchase assurances"><span>Instant PDF access</span><i /><span>Secure Payhip checkout</span><i /><span>No subscription</span><i /><span>Private, discreet purchase</span></section>

      <section className="recognition section-shell">
        <div className="recognition-heading"><p className="eyebrow"><span />From her side of the bed</p><h2>She can feel the difference between trying hard and knowing what you&apos;re doing.</h2></div>
        <div className="question-stack">{questions.map((question, index) => <div key={question}><span>0{index + 1}</span><p>{question}</p></div>)}</div>
        <p className="recognition-close">The goal is not to impress her with more moves. It is to make her feel seen, relaxed, and increasingly reluctant to let you stop.</p>
      </section>

      <section className="method-section" id="method">
        <div className="method-intro section-shell"><p className="eyebrow eyebrow-light"><span />What you actually gain</p><h2>Calm confidence.<br />Better reactions.</h2><p>You are not trying to put on a show. You are learning how to make attention feel dangerously attractive.</p></div>
        <div className="method-grid section-shell">{method.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <div className="method-quote section-shell"><span>The golden rule</span><blockquote>“The hottest move is noticing what works—and having the discipline to keep doing it.”</blockquote></div>
      </section>

      <section className="preview-section" id="preview">
        <div className="preview-intro section-shell"><div><p className="eyebrow"><span />See how the skill is built</p><h2>Less theory.<br />More “now I get it.”</h2></div><p>These are real pages from the final edition: clear visuals, practical decisions, and sequences designed to stay in your head when clothes are no longer helping you think.</p></div>
        <div className="preview-grid section-shell">
          <figure className="preview-card preview-card-one"><div><Image src="/book/table-of-contents.jpg" alt="Table of contents from The Clitoral Playbook" width={854} height={1334} sizes="(max-width: 780px) 82vw, 29vw" /></div><figcaption><span>01</span><b>Know what matters</b></figcaption></figure>
          <figure className="preview-card preview-card-two"><div><Image src="/book/core-technique.jpg" alt="Broad flat stroke technique page from The Clitoral Playbook" width={854} height={1334} sizes="(max-width: 780px) 82vw, 29vw" /></div><figcaption><span>02</span><b>Master the foundations</b></figcaption></figure>
          <figure className="preview-card preview-card-three"><div><Image src="/book/high-impact-sequence.jpg" alt="High-impact combination sequence from The Clitoral Playbook" width={854} height={1334} sizes="(max-width: 780px) 82vw, 29vw" /></div><figcaption><span>03</span><b>Know what comes next</b></figcaption></figure>
        </div>
        <div className="preview-cta section-shell"><p>One short read could end years of enthusiastic improvisation.</p><BuyButton label={`Learn the complete method — ${displayPrice}`} /></div>
      </section>

      <section className="outcomes-section section-shell">
        <div className="outcomes-heading"><p className="eyebrow"><span />What she notices</p><h2>She relaxes.<br /><em>You stop overthinking.</em></h2><p>The confidence you gain is not louder. It is slower, more attentive, and much more convincing.</p></div>
        <div className="outcomes-grid">{outcomes.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="inside-section" id="inside">
        <div className="inside-shell section-shell">
          <div className="inside-heading"><p className="eyebrow eyebrow-light"><span />The skill behind the result</p><h2>One short read.<br />Years of better instincts.</h2><p>Move from “I hope she likes this” to knowing what to notice, what to change, and when to keep doing exactly that.</p></div>
          <div className="contents-grid">{contents.map(([group, ...items], index) => <article key={group}><div><span>0{index + 1}</span><h3>{group}</h3></div><ul>{items.map((item) => <li key={item}><Check />{item}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="honest-section section-shell">
        <div className="honest-card"><p className="eyebrow"><span />The honest part</p><h2>There is no magic move. There is a much better skill.</h2><p>Every woman is different. That is precisely why learning to observe, communicate, and adapt beats copying one “secret trick” from the internet.</p></div>
        <div className="fit-card"><h3>This is for you if…</h3><ul><li><Check />You want confidence that is actually earned.</li><li><Check />You are tired of wondering whether you are doing it right.</li><li><Check />You would rather be attentive than performative.</li><li><Check />You like the sound of her pulling you closer.</li></ul></div>
      </section>

      <section className="offer-section section-shell" id="offer">
        <div className="offer-art"><div className="offer-book"><Image src="/book/clitoral-playbook-cover.jpg" alt="The Clitoral Playbook digital edition" fill sizes="(max-width: 780px) 58vw, 25vw" /></div><span>Digital edition</span></div>
        <div className="offer-copy"><p className="eyebrow eyebrow-light"><span />A very useful upgrade</p><h2>Be memorable.<br />For the right reasons.</h2><p className="offer-lead">Get the private visual guide that turns uncertain effort into calm, responsive skill—and makes “don&apos;t stop” much easier to understand.</p><div className="offer-includes"><span><Check />Confidence without the ego</span><span><Check />Arousal without the rush</span><span><Check />Techniques you can remember</span><span><Check />Instant private access</span></div><div className="offer-price"><div><small>One-time payment</small><strong>{displayPrice}</strong></div><BuyButton label="Upgrade my skills" inverse /></div><p className="offer-microcopy">Secure checkout via Payhip · No subscription · Adults 18+ · Final total shown before payment</p></div>
      </section>

      <section className="faq-section section-shell" id="questions">
        <div className="faq-heading"><p className="eyebrow"><span />Before you buy</p><h2>Straight answers.</h2><p>Everything you should know before purchasing the digital edition.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="closing-section section-shell"><p>Your next best move is learning when not to move.</p><h2>Make “don&apos;t stop”<br /><em>the easiest instruction to follow.</em></h2><BuyButton label={`Learn the skill — ${displayPrice}`} /></section>

      <footer className="site-footer">
        <div className="footer-brand"><Wordmark inverse /><p>She notices when you notice.</p></div>
        <nav className="legal-links" aria-label="Legal information"><Link href="/impressum">Impressum</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/withdrawal">Withdrawal</Link><Link href="/refund-policy">Refunds</Link><a href="mailto:hello@noryspsychologie.de">Contact</a></nav>
        <p className="footer-note">© 2026 · For consenting adults 18+ · Educational content, not medical advice.</p>
      </footer>

      <aside className="mobile-purchase" aria-label="Purchase The Clitoral Playbook"><div><span>Instant PDF</span><strong>{displayPrice}</strong></div><a href={checkoutUrl} target="_blank" rel="noreferrer">Learn the skill <Arrow /></a></aside>
    </main>
  );
}
