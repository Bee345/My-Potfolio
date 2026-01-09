import React, { useState, useEffect } from "react";
import { aboutData } from "../data/AboutData";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import HeroSkeleton from "./HeroSkeleton";

const AboutComponent = () => {
  const {
    title,
    subtitle,
    description,
    highlights,
    image,
    stats,
    personalInfo,
    documents,
  } = aboutData;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about-section"
      className="relative w-full min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-12"
    >
      <h1 className="sr-only">{title} - About</h1>

      {loading ? (
        <HeroSkeleton />
      ) : (
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* LEFT – TEXT */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="text-yellow-400 tracking-widest text-sm mb-3">
              {subtitle}
            </p>

            <h2 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
              {title}
            </h2>

            <h3 className="text-gray-400 text-2xl mb-6 min-h-[28px]">
              <Typewriter
                words={highlights}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h3>

            <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 mt-6">
              {description}
            </p>

            {/* PERSONAL INFO */}
            <div className="mt-6 space-y-2 text-gray-400 text-sm">
              <p>
                <span className="text-white font-medium">Name:</span>{" "}
                {personalInfo.name}
              </p>
              <p>
                <span className="text-white font-medium">Email:</span>{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-yellow-400 transition"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Address:</span>{" "}
                {personalInfo.address}
              </p>
              <p>
                <span className="text-white font-medium">Zipcode:</span>{" "}
                {personalInfo.zipcode}
              </p>
              <p>
                <span className="text-white font-medium">Phone:</span>{" "}
                {personalInfo.phone}
              </p>
            </div>

            {/* DOWNLOAD BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              {documents.map((doc, idx) => (
                <motion.a
                  key={idx}
                  href={doc.file}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={
                    doc.type === "cv"
                      ? "px-6 py-3 rounded-full bg-yellow-400/90 text-black font-medium hover:bg-yellow-300 transition"
                      : "px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:border-yellow-400 hover:text-yellow-400 transition"
                  }
                >
                  {doc.label}
                </motion.a>
              ))}
            </div>

            {/* STATS */}
            <div className="flex gap-8 flex-wrap mt-10 justify-center lg:justify-start">
              {stats.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col items-start"
                >
                  <span className="text-3xl font-bold text-white">
                    {item.number}
                  </span>
                  <span className="text-gray-400">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.article>

          {/* RIGHT – IMAGE */}
          <motion.article
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={image}
              alt={personalInfo.name}
              className="w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-yellow-400"
            />
          </motion.article>

          {/* SCROLL INDICATOR */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-gray-400 text-xs mb-2">Scroll</span>
            <div className="w-5 h-9 border-2 border-gray-500 rounded-full flex justify-center">
              <span className="w-1 h-2 bg-yellow-400 rounded-full mt-1 animate-bounce" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutComponent;
