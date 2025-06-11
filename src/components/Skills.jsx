const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'];

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
