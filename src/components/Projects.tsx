export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce site built with Next.js, featuring secure payments and a dynamic product catalog.',
      link: '#',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, built using React and Firebase.',
      link: '#',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio, showcasing my skills and projects with a sleek dark theme.',
      link: '#',
      image: 'https://via.placeholder.com/600x400',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}