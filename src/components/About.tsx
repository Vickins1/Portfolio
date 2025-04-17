export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm Kelvin Thuo, a passionate full-stack developer with over 5 years of experience building
              scalable and user-friendly web applications. My expertise spans modern JavaScript frameworks
              like Next.js and React, backend technologies like Node.js, and cloud solutions. I thrive on
              turning complex problems into elegant solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new tech trends, contributing to open-source
              projects, or enjoying a good cup of coffee.
            </p>
          </div>
          <div className="about-skills">
            {['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'AWS'].map((skill) => (
              <div key={skill} className="about-skill">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}