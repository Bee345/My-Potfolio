import React, { useState, useEffect } from "react";
import { projectData } from "../data/ProjectData";
import { motion } from "framer-motion";
import HeroSkeleton from "./HeroSkeleton";


const ProjectComponent = () => {
  const { title, subtitle, description, projects } = projectData;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects-section"
      className="relative w-full min-h-screen bg-black px-4 sm:px-6 lg:px-12 py-16"
    >
      {/* SEO */}
      <h1 className="sr-only">{title}</h1>

      {loading ? (
        <HeroSkeleton />
      ) : (
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-yellow-400 tracking-widest text-sm mb-2">
              {subtitle}
            </p>
            <h2 className="text-white text-4xl sm:text-5xl font-bold">
              {title}
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-gray-900/60 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400 transition"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-black border border-yellow-400/40 text-yellow-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-medium hover:bg-yellow-300 transition"
                    >
                      Live
                    </a>
                    {/* <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full border border-white/20 text-white text-sm hover:border-yellow-400 hover:text-yellow-400 transition"
                    >
                      GitHub
                    </a> */}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectComponent;
