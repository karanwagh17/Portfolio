const Projects = () => {
  const projects = [
    { title: 'E-Commerce Site', desc: 'Full MERN stack shopping experience.' },
    { title: 'Blog Platform', desc: 'Markdown blog with authentication and dashboard.' },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
