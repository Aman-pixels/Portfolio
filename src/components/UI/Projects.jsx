import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    name: "MiniX",
    subtitle: "An easier way to explore, shop, and save.",
    type: "E-commerce experience",
    image: "/minix-preview.webp",
    link: "https://mini-x-pearl.vercel.app/",
    description:
      "A shopping frontend with an animated cart, persistent local storage, and a carefully considered interface from browsing to checkout.",
    tags: ["React", "Tailwind CSS", "Local storage"],
    className: "project-shop",
  },
  {
    name: "MiniType",
    subtitle: "Find your rhythm. One word at a time.",
    type: "Interactive web app",
    image: "/minitype-preview.webp",
    link: "https://mini-type.vercel.app/",
    description:
      "A focused space to practice typing, with real-time feedback on speed and accuracy and a minimal interface that stays out of your way.",
    tags: ["React", "JavaScript", "Real-time feedback"],
    className: "project-type",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section projects-section container"
      aria-labelledby="projects-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="section-number">01 /</span> Selected work
          </p>
          <h2 id="projects-heading">
            Ideas made <em>real.</em>
          </h2>
        </div>
        <a
          className="text-link"
          href="https://github.com/Aman-pixels"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={17} /> More on GitHub <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card ${project.className}`}
            key={project.name}
          >
            <a
              className="project-image-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name} live website (new tab)`}
            >
              <div className="project-image-top">
                <span>{project.type}</span>
                <span>0{index + 1}</span>
              </div>
              <div className="browser-preview">
                <div className="browser-bar">
                  <i />
                  <i />
                  <i />
                  <span>{new URL(project.link).hostname}</span>
                </div>
                <img
                  src={project.image}
                  alt={`${project.name} app interface`}
                  width="1200"
                  height="760"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="project-visit">
                Visit live site <ArrowUpRight size={16} />
              </span>
            </a>
            <div className="project-body">
              <div className="project-title-row">
                <h3>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.name} <ArrowUpRight size={24} />
                  </a>
                </h3>
                <span className="small-label">Personal project</span>
              </div>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
