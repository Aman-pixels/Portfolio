const milestones = [
  {
    year: "Oct 2026",
    title: "Web Development Intern · SkillCraft Technology",
    text: "Built three interactive web applications during a one-month internship: a quiz game, a responsive landing page, and a stopwatch using HTML, CSS, and JavaScript.",
  },
  {
    year: "Nov–Dec 2025",
    title: "Home Automation Intern · College Internship",
    text: "Developed a home automation system, connecting hardware components with software logic and practical automation workflows.",
  },
  {
    year: "Now",
    title: "Computer Science & Engineering · Ramaiah Institute of Technology",
    text: "Studying for a B.E. in Bangalore (2024–2028 expected), with a current CGPA of 8.1 / 10.",
  },
  {
    year: "2024",
    title: "PMSSS undergraduate scholarship",
    text: "Awarded the Prime Minister’s Special Scholarship Scheme for undergraduate education. Solved 100+ problems on LeetCode and GeeksforGeeks.",
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
