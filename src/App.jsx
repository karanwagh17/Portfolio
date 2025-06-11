import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
} from "react-icons/di";
import { SiExpress, SiBootstrap, SiJquery, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";
import "./App.css";
import nixon from "../src/assets/nixon.png";
import blog from "../src/assets/blog project.png";
import iherb from "../src/assets/Screenshot 2025-06-11 132404.png";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "JavaScript", icon: <DiJavascript1 color="#f0db4f" /> },
    { name: "React", icon: <DiReact color="#61dafb" /> },
    { name: "Node.js", icon: <DiNodejsSmall color="#68a063" /> },
    { name: "MongoDB", icon: <DiMongodb color="#4db33d" /> },
    { name: "ExpressJS", icon: <SiExpress color="#000000" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#563d7c" /> },
    { name: "jQuery", icon: <SiJquery color="#0769ad" /> },
    { name: "Redux", icon: <SiRedux color="#764abc" /> },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader">
          <div className="ring"></div>
          <span className="loading-text">Karan Wagh Portfolio</span>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">Karan Wagh</div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <header className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hi, I'm <span className="highlight">Karan Wagh</span>
          </h1>
          <p className="subheading">
            Creative <span className="gradient-text">MERN-Stack Developer</span>
          </p>
          <a href="#projects" className="btn-primary btn-glow">
            View My Work
          </a>
          <a href="/karan.pdf" className="btn-secondary" download>
            📄 Download Resume
          </a>
        </motion.div>

        <motion.div
          className="hero-animation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src="/undraw_building-a-website_1wrp.svg"
            alt="Developer Illustration"
          />
        </motion.div>
      </header>

      <motion.section
        id="about"
        className="section about"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p>
          Hello! I’m Karan Wagh, a passionate web developer with experience in
          building modern and responsive websites. I love creating clean and
          efficient code, and I’m always eager to learn new technologies and
          improve my skills. When I’m not coding, I enjoy reading tech blogs and
          exploring new tools.
        </p>
      </motion.section>

      <motion.section
        id="projects"
        className="section projects"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Projects</h2>
        <div className="project-grid">
          <motion.div
            className="project-card glass"
            whileHover={{ scale: 1.05 }}
          >
            <div className="project-image">
              <a href="https://nixon-three.vercel.app/" target="_blank">
                <img src={nixon} alt="Nixon Watch" />
              </a>
            </div>
            <h3>Nixon Watch</h3>
            <p>Watch shopping platform and cart management.</p>
            <a
              href="https://github.com/karanwagh17/javascript-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code Link
            </a>
          </motion.div>

          <motion.div
            className="project-card glass"
            whileHover={{ scale: 1.05 }}
          >
            <div className="project-image">
              <img src={blog} alt="Login Blog System" />
            </div>
            <h3>Login Blog System</h3>
            <p>Login blog with unique design using React and Node.</p>
            <a
              href="https://github.com/karanwagh17/Login-blog-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code Link
            </a>
          </motion.div>
          <motion.div
            className="project-card glass"
            whileHover={{ scale: 1.05 }}
          >
            <div className="project-image">
              <a href="https://i-herb-ten.vercel.app/"><img src={iherb} alt="Login Blog System" /></a>
            </div>
            <h3> iHerb Clone</h3>
            <p>
              This is a full-stack iHerb Clone project developed with MERN
              stack. 
            </p>
            <a
              href="https://github.com/karanwagh17/i-herb-?tab=readme-ov-file#-folder-structure"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code Link
            </a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="section skills"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Skills</h2>
        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-chip glass"
              variants={fadeUp}
              whileHover={{ scale: 1.1 }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        className="section contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact</h2>
        <div className="social-icons colorful-icons">
          <a
            href="https://github.com/karanwagh17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/karanwagh17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={36} />
          </a>
          <a
            href="mailto:kp76985566@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail size={36} />
          </a>
          <a
            href="https://www.instagram.com/_karannn_17__?igsh=c2F0OW1jbnBlcWtz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={36} />
          </a>
        </div>
      </motion.section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Karan Wagh. All rights reserved.</p>
      </footer>
    </div>
  );
}
