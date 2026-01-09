import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import { skillsData } from "../data/SkillsData";
import HeroSkeleton from "./HeroSkeleton";


const SkillsComponent = () => {
  const { title, subtitle, description, skills, categories } = skillsData;
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Frontend");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section
      id="skills-section"
      className="relative w-full min-h-screen bg-black px-4 sm:px-6 lg:px-12 py-16"
    >
      <h1 className="sr-only">{title}</h1>

      {loading ? (
        <HeroSkeleton />
      ) : (
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <p className="text-yellow-400 tracking-widest text-sm mb-2">
              {subtitle}
            </p>
            <h2 className="text-white text-4xl sm:text-5xl font-bold">
              {title}
            </h2>
            <p className="text-gray-400 mt-4">{description}</p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-yellow-400 text-black"
                    : "border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-8">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  {/* <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6"
                  /> */}
                  <span className="text-white font-medium">
                    {skill.name}
                  </span>
                  <span className="ml-auto text-yellow-400 text-sm">
                    {skill.level}%
                  </span>
                </div>

                <ProgressBar value={skill.level}  barClass={`max-w-full`}/>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsComponent;

