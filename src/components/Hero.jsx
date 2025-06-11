const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white" id="hero">
      <div className="text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Alex</h2>
        <p className="text-xl md:text-2xl mb-6">A Full-Stack Developer crafting modern web experiences</p>
        <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
