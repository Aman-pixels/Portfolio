import Navbar from "./components/UI/Navbar";
import Hero from "./components/UI/Hero";
import Projects from "./components/UI/Projects";
import About from "./components/UI/About";
import Skills from "./components/UI/Skills";
import Experience from "./components/UI/Experience";
import Contact from "./components/UI/Contact";
import "./portfolio.css";
export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
