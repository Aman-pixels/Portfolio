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
          I’m Aman, an engineering student in India who likes making the
          internet a little more interesting.
        </p>
        <p>
          What started with a few lines of JavaScript has become a love for
          building complete web experiences. I care about the details: how an
          interface feels, how quickly it responds, and how naturally it works.
        </p>
        <p>
          These days, I’m building with React and the MERN stack, exploring AI
          automation with n8n, and getting deeper into backend architecture.
          There’s always something new to figure out. That’s my favorite part.
        </p>
        <div className="about-principles">
          <span>
            <Code2 size={18} /> Built with intention
          </span>
          <span>
            <Sparkles size={18} /> An eye for the details
          </span>
        </div>
        <a className="text-link" href="#contact">
          Let’s build something together <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
