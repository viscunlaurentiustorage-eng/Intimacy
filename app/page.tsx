import Image from "next/image";

const checkoutUrl = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_CHECKOUT_URL || "#offer";
const isExternalCheckout = checkoutUrl.startsWith("http");

const chapters = [
  { part: "I", title: "Orientation before action", pages: "06–10", items: ["Attention beats technique", "Anatomy without reduction", "Arousal is a system"] },
  { part: "II", title: "The responsive method", pages: "11–23", items: ["Make yes easy—and no easier", "Find the baseline", "The five dials", "Use approaches, not tricks"] },
  { part: "III", title: "Safety without shame", pages: "24–28", items: ["Know the actual risk", "Dental dams made simple", "Pain is information"] },
  { part: "IV", title: "Mastery through practice", pages: "29–37", items: ["Train the communication", "Make direction elegant", "Your shared map", "The pocket method"] },
];

const faqs = [
  ["Who is this written for?", "Consenting adults who want to approach cunnilingus with more confidence, care, and responsiveness. It works whether you are new, experienced, reading alone, or reading with a partner."],
  ["Is it just a list of techniques?", "No. You will find gentle starting approaches, but the book’s real value is the system around them: consent, setup, calibration, feedback, safety, and knowing when to stay consistent."],
  ["Is the book graphic?", "It is direct and adult, but never crude. The design is discreet and editorial, with simplified educational diagrams rather than explicit photography."],
  ["Is the advice evidence-informed?", "Yes. Health and anatomy sections reference peer-reviewed research and patient education from organizations including ACOG, the CDC, Planned Parenthood, the NHS, and WHO. It remains education, not medical advice."],
  ["What will I receive?", "A 37-page premium PDF that reads beautifully on phones, tablets, and computers. Lemon Squeezy will handle secure payment and instant digital delivery."],
];

function Mark() {
  return <span className="mark" aria-hidden="true"><span /><span /></span>;
}

function BuyButton({ label = "Get the guide" }: { label?: string }) {
  return (
    <a className="buy-button" href={checkoutUrl} target={isExternalCheckout ? "_blank" : undefined} rel={isExternalCheckout ? "noreferrer" : undefined} aria-label={`${label} — The Clit Runner ebook`}>
      <span>{label}</span><b aria-hidden="true">↗</b>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Pleasure Manual home"><Mark /><span>The Pleasure Manual</span></a>
        <nav aria-label="Main navigation"><a href="#preview">Preview</a><a href="#inside">Inside</a><a href="#questions">Questions</a></nav>
        <a className="header-buy" href={checkoutUrl}>Get the ebook <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="kicker"><span /> A field guide for better lovers</p>
          <h1>Great oral sex isn’t a trick. <em>It’s paying attention.</em></h1>
          <p className="hero-lead">The Clit Runner is a warm, practical guide to cunnilingus for people who want less guessing, easier communication, and more pleasure without pressure.</p>
          <div className="hero-actions"><BuyButton label="Get instant access" /><a className="quiet-link" href="#preview">See real pages <span>↓</span></a></div>
          <ul className="hero-facts" aria-label="Product details">
            <li><strong>37</strong><span>beautifully designed pages</span></li>
            <li><strong>20</strong><span>short, useful chapters</span></li>
            <li><strong>1</strong><span>method you can remember</span></li>
          </ul>
        </div>
        <div className="book-stage" aria-label="The Clit Runner premium ebook">
          <div className="human-note note-one">No ego.<br />No guessing.</div><div className="book-shadow" />
          <div className="book-cover">
            <Image src="/luxury-cover-art.png" alt="" fill priority sizes="(max-width: 760px) 78vw, 34vw" />
            <div className="cover-copy"><span>The Pleasure Manual presents</span><h2>The<br />Clit<br />Runner</h2><p>A refined, responsive guide to cunnilingus for consenting adults</p><small>Premium edition · 2026</small></div>
          </div>
          <div className="edition-seal">Premium<br /><span>edition</span></div>
        </div>
      </section>

      <section className="recognition section-wrap">
        <div className="recognition-copy"><p className="section-kicker">Let’s be honest</p><h2>Most people were never actually taught this.</h2><p>We pick things up from jokes, porn, guesswork, and past partners—then quietly wonder whether we are doing it “right.” That is a lot of pressure for something that should feel connected.</p><p className="hand-line">You don’t need a perfect routine. You need a better way to listen.</p></div>
        <div className="thoughts" aria-label="Common questions the guide answers"><p>“How do I know if they actually like it?”</p><p>“Should I change something—or keep going?”</p><p>“How do we talk without killing the mood?”</p><p>“What if direct touch is too much?”</p></div>
      </section>

      <section className="outcomes section-wrap">
        <div className="outcomes-heading"><p className="section-kicker">What changes</p><h2>You finish the book knowing what to do next.</h2></div>
        <div className="outcome-grid">
          <article><span>01</span><h3>Begin without rushing</h3><p>Create comfort, ask clearly, and use the first 90 seconds to find a baseline.</p></article>
          <article><span>02</span><h3>Adjust with confidence</h3><p>Change location, pressure, pace, pattern, or duration—one useful dial at a time.</p></article>
          <article><span>03</span><h3>Read without assuming</h3><p>Notice body language, verify what it means, and correct course without defensiveness.</p></article>
          <article><span>04</span><h3>Make honesty feel safe</h3><p>Turn “lighter,” “stay,” “not there,” and “stop” into ordinary, welcome information.</p></article>
        </div>
      </section>

      <section className="preview-section section-wrap" id="preview">
        <div className="preview-heading"><div><p className="section-kicker light">Look inside</p><h2>See exactly what you’re getting.</h2></div><p>Short chapters. Clear language. Useful scripts. Designed to be read, remembered, and returned to.</p></div>
        <div className="page-previews">
          <figure className="preview-card preview-card-one"><Image src="/previews/attention.png" alt="Preview page: Attention beats technique" width={839} height={1191} sizes="(max-width: 760px) 78vw, 27vw" /><figcaption><span>01</span> The governing principle</figcaption></figure>
          <figure className="preview-card preview-card-two"><Image src="/previews/feedback.png" alt="Preview page: Make yes easy and no easier" width={839} height={1191} sizes="(max-width: 760px) 78vw, 27vw" /><figcaption><span>04</span> Consent that feels natural</figcaption></figure>
          <figure className="preview-card preview-card-three"><Image src="/previews/checklist.png" alt="Preview page: The one-minute pre-flight checklist" width={839} height={1191} sizes="(max-width: 760px) 78vw, 27vw" /><figcaption><span>Bonus</span> The one-minute reset</figcaption></figure>
        </div>
      </section>

      <section className="method section-wrap">
        <div className="method-copy"><p className="section-kicker light">The memorable bit</p><h2>Five dials.<br />One change.<br /><em>Then listen.</em></h2><p>Instead of chasing named moves, you learn to calibrate the variables that shape every kind of touch: location, pressure, pace, pattern, and duration.</p><div className="method-quote">“Real precision is the ability to change one thing while keeping the rest stable.”</div></div>
        <div className="method-image"><Image src="/five-dials.png" alt="Five control dials representing location, pressure, pace, pattern, and duration" width={1536} height={1024} sizes="(max-width: 900px) 100vw, 55vw" /></div>
      </section>

      <section className="letter section-wrap">
        <div className="letter-label"><Mark /><span>A note from<br />The Pleasure Manual</span></div>
        <div className="letter-copy"><p className="opening">Dear reader,</p><h2>Anyone can collect techniques. Mastery begins when you stop performing and start perceiving.</h2><p>Bodies do not arrive with universal settings. Sensitivity changes with trust, stress, sleep, medication, pain, hormones, and the quality of the moment itself.</p><p>Your job is not to know in advance. Your job is to make discovery feel safe, generous, and unhurried. That is the skill this book was made to teach.</p><p className="signoff">Be present. Be precise. Be kind.<br /><span>Then listen again.</span></p></div>
      </section>

      <section className="inside section-wrap" id="inside">
        <div className="inside-heading"><p className="section-kicker">Inside the premium edition</p><h2>A complete field guide, without the filler.</h2><p>Four parts move from mindset to method, safety, and real-world practice.</p></div>
        <div className="chapter-groups">{chapters.map((chapter) => <article key={chapter.part}><div className="chapter-top"><span>Part {chapter.part}</span><small>Pages {chapter.pages}</small></div><h3>{chapter.title}</h3><ul>{chapter.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="evidence section-wrap">
        <div><p className="section-kicker light">Evidence, not ego</p><h2>Carefully researched.<br />Clearly explained.</h2></div>
        <div><p>Health and anatomy sections draw from peer-reviewed research and current patient education. Practical frameworks are always presented as starting points—not universal rules.</p><ul aria-label="Research sources"><li>ACOG</li><li>CDC</li><li>Planned Parenthood</li><li>NHS</li><li>WHO</li></ul><small>These organizations have not endorsed or reviewed this publication.</small></div>
      </section>

      <section className="offer section-wrap" id="offer">
        <div className="offer-card">
          <div className="offer-book"><Image src="/luxury-cover-art.png" alt="The Clit Runner book artwork" fill sizes="(max-width: 760px) 60vw, 24vw" /><div><span>The Pleasure Manual</span><strong>The<br />Clit<br />Runner</strong><small>Premium edition</small></div></div>
          <div className="offer-copy"><p className="section-kicker light">Start tonight</p><h2>Less guessing.<br /><em>More listening.</em></h2><p>A discreet, beautifully designed PDF for consenting adults who care about getting this right.</p><ul><li><span>✓</span> 37-page premium digital edition</li><li><span>✓</span> 20 concise, actionable chapters</li><li><span>✓</span> Scripts, exercises, field notes, and checklists</li><li><span>✓</span> Secure checkout and instant delivery</li></ul><BuyButton label="Get The Clit Runner" /><small className="secure-note">Secure checkout powered by Lemon Squeezy · PDF download · Adults 18+</small></div>
        </div>
      </section>

      <section className="faq section-wrap" id="questions">
        <div className="faq-heading"><p className="section-kicker">Before you buy</p><h2>Honest answers.</h2><p>Still unsure? Here’s what most readers want to know.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <footer><div className="footer-brand"><Mark /><span>The Pleasure Manual</span></div><p>Present. Precise. Kind.</p><p>© 2026 · Adult sexual-wellness education, not medical advice.</p></footer>
      <aside className="mobile-buy-bar" aria-label="Purchase The Clit Runner"><div><strong>The Clit Runner</strong><span>Premium PDF · 37 pages</span></div><a href={checkoutUrl} target={isExternalCheckout ? "_blank" : undefined} rel={isExternalCheckout ? "noreferrer" : undefined}>Get the ebook <span>↗</span></a></aside>
    </main>
  );
}
