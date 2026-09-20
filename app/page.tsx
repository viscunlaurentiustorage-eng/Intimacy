import Image from "next/image";
import Link from "next/link";

const checkoutUrl =
  process.env.NEXT_PUBLIC_PAYHIP_CHECKOUT_URL ||
  "https://payhip.com/buy?s=1&cart_links%5B%5D=035Rp&qty%5B035Rp%5D=1";
const displayPrice = process.env.NEXT_PUBLIC_EBOOK_PRICE || "$9.99";

const results = [
  {
    number: "01",
    title: "Know where your attention matters",
    text: "Understand the anatomy that matters, without drowning in medical language or guessing your way through the moment.",
  },
  {
    number: "02",
    title: "Make your tongue work with purpose",
    text: "Learn how position, pressure, pace, and consistency turn enthusiastic effort into calm, controlled technique.",
  },
  {
    number: "03",
    title: "Read her response—not a script",
    text: "Notice the signals that tell you when to adjust, when to slow down, and when changing absolutely nothing is the best move.",
  },
];

const chapters = [
  "Anatomy without the awkward lecture",
  "Build-up, anticipation, and timing",
  "Tongue position, pressure, and pace",
  "Consistency and reading her response",
  "Combining touch without overcomplicating it",
  "Complete sequences you can actually remember",
];

const faqs = [
  {
    question: "Who is this guide for?",
    answer: "For consenting adults, especially men who want to replace uncertainty with practical knowledge and become more attentive, confident partners. It works as a clear starting point or a useful reset.",
  },
  {
    question: "Is it just a list of moves?",
    answer: "No. The manual teaches a simple framework: understand the anatomy, build anticipation, use the foundations well, and adapt to the person in front of you. The goal is better judgment, not a longer performance checklist.",
  },
  {
    question: "Does it guarantee the same result for every woman?",
    answer: "No honest guide can promise that. Bodies and preferences differ. This manual gives you reliable starting points and teaches you how to observe, communicate, and adjust with care.",
  },
  {
    question: "How direct is the content?",
    answer: "It uses clear adult educational language and non-photographic illustrations. There is no explicit photography. The tone is practical, respectful, and focused on consensual intimacy.",
  },
  {
    question: "What do I receive?",
    answer: "A professionally designed 24-page digital PDF with nine focused chapters and four complete sequences. You can read it privately on your phone, tablet, or computer.",
  },
  {
    question: "How do delivery and support work?",
    answer: "Payhip provides the download after payment and emails your receipt and access link. If you have trouble accessing the file, email hello@noryspsychologie.de with your Payhip order number and purchase email.",
  },
];

function Arrow({ down = false }: { down?: boolean }) {
  return down ? (
    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v13M5 11l5 5 5-5" /></svg>
  ) : (
    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5" /></svg>
  );
}

function Check() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>;
}

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`lp-brand ${inverse ? "lp-brand-inverse" : ""}`}>
      <span className="lp-brand-mark"><Image src="/logoW.png" alt="" width={600} height={450} sizes="42px" /></span>
      <span>The Pleasure Manual</span>
    </span>
  );
}

function BuyButton({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <a className={`lp-buy-button ${light ? "lp-buy-button-light" : ""}`} href={checkoutUrl} target="_blank" rel="noreferrer">
      <span>{label}</span>
      <Arrow />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top" className="lp-page">
      <header className="lp-header">
        <a href="#top" aria-label="The Pleasure Manual home"><Brand /></a>
        <nav aria-label="Main navigation">
          <a href="#result">The result</a>
          <a href="#inside">Inside</a>
          <a href="#questions">Questions</a>
        </nav>
        <a className="lp-header-buy" href={checkoutUrl} target="_blank" rel="noreferrer">
          Get the guide <span>{displayPrice}</span>
        </a>
      </header>

      <section className="lp-hero lp-shell">
        <div className="lp-hero-copy">
          <h1>Better tongue work.<br /><em>Less guesswork.</em></h1>
          <p className="lp-hero-lead">A private, illustrated pleasure manual for men who want to understand her body, read her response, and bring more skill to the moment—without turning intimacy into a performance.</p>
          <div className="lp-hero-actions">
            <BuyButton label={`Get the digital guide — ${displayPrice}`} />
            <a className="lp-text-link" href="#inside"><span>See what you&apos;ll learn</span><Arrow down /></a>
          </div>
          <div className="lp-proof" aria-label="Product details">
            <span><Check />24 pages</span>
            <span><Check />Instant PDF</span>
            <span><Check />One-time payment</span>
          </div>
          <p className="lp-checkout-note">Private purchase. Secure checkout powered by Payhip.</p>
        </div>

        <div className="lp-hero-product" aria-label="The Clitoral Playbook digital guide">
          <div className="lp-cover-stage">
            <div className="lp-cover">
              <Image src="/book/clitoral-playbook-cover.jpg" alt="Cover of The Clitoral Playbook" fill preload sizes="(max-width: 760px) 68vw, 31vw" />
            </div>
            <div className="lp-cover-meta"><span>Digital edition</span><strong>{displayPrice}</strong></div>
          </div>
        </div>
      </section>

      <section className="lp-reaction lp-shell" aria-label="The result to work toward">
        <blockquote>“Okay… where did you learn that? Come here—I&apos;m not done with you yet.”</blockquote>
      </section>

      <section className="lp-results lp-shell" id="result">
        <div className="lp-section-heading">
          <p>The change</p>
          <h2>She feels understood.<br /><em>You stop overthinking.</em></h2>
          <span>The goal is not to perform more. It is to notice more—and know what to do with what you notice.</span>
        </div>
        <div className="lp-results-list">
          {results.map((result) => (
            <article key={result.number}>
              <span>{result.number}</span>
              <h3>{result.title}</h3>
              <p>{result.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-principle lp-shell">
        <p>No circus tricks. No impossible promises.</p>
        <h2>Every woman is different.<br />That is exactly why this skill matters.</h2>
        <div>
          <p>A memorized routine cannot tell you what she likes. Attention can. The manual gives you a clear starting point, then teaches you how to listen, notice, communicate, and adapt.</p>
          <p>That is the difference between trying hard and making her feel genuinely understood.</p>
        </div>
      </section>

      <section className="lp-inside lp-shell" id="inside">
        <div className="lp-inside-intro">
          <p>Inside the manual</p>
          <h2>Short enough to read tonight.<br /><em>Clear enough to remember later.</em></h2>
          <p>Twenty-four focused pages. No filler, no vague advice, and no need to study it like an exam.</p>
          <dl className="lp-stats">
            <div><dt>24</dt><dd>illustrated pages</dd></div>
            <div><dt>9</dt><dd>focused chapters</dd></div>
            <div><dt>4</dt><dd>complete sequences</dd></div>
          </dl>
        </div>
        <ol className="lp-chapter-list">
          {chapters.map((chapter, index) => (
            <li key={chapter}><span>{String(index + 1).padStart(2, "0")}</span><p>{chapter}</p></li>
          ))}
        </ol>
      </section>

      <section className="lp-offer lp-shell" id="offer">
        <div className="lp-offer-art">
          <div className="lp-offer-cover"><Image src="/book/clitoral-playbook-cover.jpg" alt="The Clitoral Playbook digital edition" fill sizes="(max-width: 760px) 58vw, 24vw" /></div>
        </div>
        <div className="lp-offer-copy">
          <p className="lp-offer-label">The digital edition</p>
          <h2>A private upgrade you can use for years.</h2>
          <p>Read it once for the framework. Return to it whenever you want a reset. The lessons are practical enough to use and simple enough to remember.</p>
          <ul>
            <li><Check />Professionally designed 24-page PDF</li>
            <li><Check />Illustrated, direct, and easy to follow</li>
            <li><Check />Made for private reading on any device</li>
            <li><Check />Instant access after purchase</li>
          </ul>
          <div className="lp-price"><span>One-time payment</span><strong>{displayPrice}</strong></div>
          <BuyButton label="Get the pleasure manual" light />
          <small>Secure Payhip checkout · No subscription · Final total shown before payment</small>
        </div>
      </section>

      <section className="lp-faq lp-shell" id="questions">
        <div className="lp-faq-heading">
          <p>Before you buy</p>
          <h2>Straight answers.</h2>
          <span>A useful guide should be clear about what it can—and cannot—do.</span>
        </div>
        <div className="lp-faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary><span>{item.question}</span><b>+</b></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="lp-final lp-shell">
        <p>Private. Practical. Worth knowing.</p>
        <h2>Your tongue already knows how to move.<br /><em>Give it better information.</em></h2>
        <BuyButton label={`Get the guide — ${displayPrice}`} />
      </section>

      <footer className="lp-footer">
        <div><Brand inverse /><p>Better intimacy begins with better attention.</p></div>
        <nav aria-label="Legal information">
          <Link href="/impressum">Impressum</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/withdrawal">Withdrawal</Link>
          <Link href="/refund-policy">Refunds</Link>
          <a href="mailto:hello@noryspsychologie.de">Contact</a>
        </nav>
        <p>© 2026 · For consenting adults 18+ · Educational content, not medical advice.</p>
      </footer>

      <aside className="lp-mobile-buy" aria-label="Purchase The Pleasure Manual">
        <div><span>Digital guide</span><strong>{displayPrice}</strong></div>
        <a href={checkoutUrl} target="_blank" rel="noreferrer">Get instant access <Arrow /></a>
      </aside>
    </main>
  );
}
