import { ArrowUpRight, Braces, Database, Workflow, Wrench } from "lucide-react";

const categories = [
  {
    icon: Braces,
    title: "The interface",
    label: "FRONTEND",
    skills: [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Three.js",
      "Framer Motion",
    ],
  },
  {
    icon: Database,
    title: "Behind the scenes",
    label: "BACKEND",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
  },
  {
    icon: Wrench,
    title: "The everyday kit",
    label: "TOOLS",
    skills: ["Git & GitHub", "Vite", "Postman"],
  },
  {
    icon: Workflow,
    title: "Next on the horizon",
    label: "EXPLORING",
    skills: ["AI automation · n8n", "System design", "Backend architecture"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section container"
      aria-labelledby="skills-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="section-number">03 /</span> My toolkit
          </p>
          <h2 id="skills-heading">
            The tools behind
            <br />
            the <em>thought.</em>
          </h2>
        </div>
        <p className="section-aside">
          A growing collection of technologies
          <br />I use to bring things to life.
        </p>
      </div>
      <div className="skills-grid">
        {categories.map((category) => {
          const { icon: Icon, title, label, skills } = category;
          return (
            <article className="skill-card" key={title}>
              <div className="skill-card-top">
                <Icon size={23} strokeWidth={1.5} />
                <span>{label}</span>
                {label === "EXPLORING" && <span className="status-dot" />}
              </div>
              <h3>{title}</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
      <a
        className="toolkit-note"
        href="https://github.com/Aman-pixels"
        target="_blank"
        rel="noreferrer"
      >
        <span>Less collecting frameworks. More making things with them.</span>
        <span>
          See what I’m building <ArrowUpRight size={16} />
        </span>
      </a>
    </section>
  );
}
