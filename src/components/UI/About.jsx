import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="section about-section container"
      aria-labelledby="about-heading"
    >
      <div className="about-heading">
        <p className="eyebrow">
          <span className="section-number">02 /</span> A bit about me
        </p>
        <h2 id="about-heading">
          Curiosity first.
          <br />
          <em>Code follows.</em>
        </h2>
        <span className="about-asterisk" aria-hidden="true">
          ✳
        </span>
      </div>
      <div className="about-content">
        <p className="about-lead">
          I’m Aman, a Computer Science and Engineering student at Ramaiah
          Institute of Technology in Bangalore.
        </p>
        <p>
          I build full-stack applications and experiment with AI-powered tools.
          I care about the details: how an interface feels, how reliably it
          works, and how thoughtfully it solves a real problem.
        </p>
        <p>
          I’m especially interested in agentic systems, practical automation,
          and the engineering that turns a promising idea into a useful product.
        </p>
        <div className="about-principles">
          <span>
            <Code2 size={18} /> Built with intention
          </span>
          <span>
            <Sparkles size={18} /> An eye for the details
          </span>
        </div>
        <div className="about-education">
          <span>2024 — 2028</span>
          <p><strong>B.E. Computer Science and Engineering</strong><br />Ramaiah Institute of Technology · CGPA 8.1 / 10</p>
        </div>
        <a className="text-link" href="#contact">
          Let’s build something together <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
