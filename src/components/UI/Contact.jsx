import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
} from "lucide-react";

const email = "amankundal540@gmail.com";

export default function Contact() {
  const [copyState, setCopyState] = useState("idle");
  const resetRef = useRef(null);
  useEffect(() => () => window.clearTimeout(resetRef.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    window.clearTimeout(resetRef.current);
    resetRef.current = window.setTimeout(() => setCopyState("idle"), 3500);
  }
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="contact-top">
          <p className="eyebrow">
            <span className="section-number">04 /</span> Have something in mind?
          </p>
          <span className="contact-note">
            <span className="status-dot" /> Good conversations welcome
          </span>
        </div>
        <a className="contact-headline" href={`mailto:${email}`}>
          <h2 id="contact-heading">
            Let’s make
            <br />
            <em>something matter.</em>
          </h2>
          <span className="contact-arrow">
            <ArrowUpRight strokeWidth={1} />
          </span>
        </a>
        <div className="contact-bottom">
          <div className="email-row">
            <a href={`mailto:${email}`}>{email}</a>
            <button
              type="button"
              onClick={copyEmail}
              className="copy-button"
              aria-label="Copy email address"
            >
              {copyState === "copied" ? (
                <Check size={17} />
              ) : (
                <Copy size={17} />
              )}
            </button>
            <span className="copy-feedback" role="status">
              {copyState === "copied"
                ? "Copied!"
                : copyState === "error"
                  ? "Please copy the email directly."
                  : ""}
            </span>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/Aman-pixels"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> GitHub <ArrowUpRight size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-kundal-631192343/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <footer>
          <a className="wordmark" href="#home">
            aman<span aria-hidden="true">✳</span>
          </a>
          <span>© {new Date().getFullYear()} Aman Kundal</span>
          <span>Made with curiosity & a little caffeine.</span>
          <a className="back-top" href="#home">
            Back to top <ArrowUp size={15} />
          </a>
        </footer>
      </div>
    </section>
  );
}
