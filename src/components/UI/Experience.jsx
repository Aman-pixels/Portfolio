const milestones = [
  {
    year: "Now",
    title: "Connecting the dots",
    text: "Exploring AI workflows, system design, and the architecture behind better web applications.",
  },
  {
    year: "2024",
    title: "From practice to products",
    text: "Started building and deploying projects with React, the MERN stack, and Firebase.",
  },
  {
    year: "2023",
    title: "The first line of code",
    text: "Discovered JavaScript, the joy of figuring things out, and a new way to make ideas tangible.",
  },
];

export default function Experience() {
  return (
    <section
      className="section journey-section container"
      aria-labelledby="journey-heading"
    >
      <div>
        <p className="eyebrow">Always a work in progress</p>
        <h2 id="journey-heading">
          Small steps.
          <br />
          <em>New possibilities.</em>
        </h2>
      </div>
      <ol className="timeline">
        {milestones.map((item) => (
          <li key={item.year}>
            <span
              className={`timeline-year ${item.year === "Now" ? "current" : ""}`}
            >
              {item.year}
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
