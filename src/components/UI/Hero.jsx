import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Plus,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="hero-section container"
      id="home"
      aria-labelledby="hero-heading"
    >
      <div className="hero-topline">
        <span>
          <span className="status-dot" /> Developer & creative thinker
        </span>
        <span className="hero-location">
          Based in India · Building for the web
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            Hey there, I’m Aman Kundal <span className="hello">↗</span>
          </p>
          <h1 id="hero-heading">
            A little code.
            <br />A lot of <span className="serif-word">possibility.</span>
          </h1>
          <p className="hero-description">
            I turn ideas into thoughtful digital experiences. Full-stack
            development, a love for design, and a curiosity that never switches
            off.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowDownRight size={19} />
            </a>
            <a className="text-link" href="/Aman_Resume.pdf" download>
              Résumé <Download size={16} />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-line" /> Engineering student.
            <br />
            Always learning. Always building.
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <img
              src="/aman-portrait.webp"
              alt="Aman seated in a black suit"
              width="720"
              height="1200"
              fetchPriority="high"
            />
            <div className="portrait-top">
              <span>A.K. / THE HUMAN BEHIND THE CODE</span>
              <Plus size={18} />
            </div>
            <span className="portrait-caption">
              Curiosity is
              <br />
              <em>the starting point.</em>
            </span>
            <span className="portrait-index">01 / INTRO</span>
          </div>
          <a className="floating-label" href="#about">
            <span className="status-dot" /> A builder at heart{" "}
            <ArrowUpRight size={17} />
          </a>
          <span className="visual-cross" aria-hidden="true">
            ✳
          </span>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#projects">
          <ArrowDown size={15} /> Scroll to discover
        </a>
        <span>Good things happen where design meets code.</span>
        <span className="edition">PORTFOLIO / 2026</span>
      </div>
    </section>
  );
}
