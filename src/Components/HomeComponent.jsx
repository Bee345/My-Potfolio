import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { homeData } from "../data/HomeData";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import HeroSkeleton from "./HeroSkeleton";

const HomeComponent = () => {
  const { greeting, name, highlightName, role, description, buttons, image } = homeData;

  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % homeData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-12"
    >
        <h1 className="sr-only">
 Chidubemagha Michael Ogbu - Tech Mason | Frontend Engineer | React & Tailwind Specialist
</h1>

      {loading ? (
        <HeroSkeleton  />
      ) : (
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="text-yellow-400 tracking-widest text-sm mb-3">{greeting}</p>

            <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              I'm <span className="text-yellow-400">{name}</span>
              <br />
              <span className="text-gray-400">{highlightName}</span>
            </h1>

            {/* Animated Role */}
            <h2 className="text-gray-300 text-lg sm:text-xl mt-4 min-h-[28px]">
              <Typewriter
                words={Array.isArray(role) ? role : [role]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 mt-6">{description}</p>

            {/* Glass Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              {buttons.map((btn, index) => (
                <Link
                  key={index}
                  to={btn.link}
                  className={
                    btn.primary
                      ? "px-6 py-3 rounded-full bg-yellow-400/90 backdrop-blur-md text-black font-medium hover:bg-yellow-300 transition"
                      : "px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:border-yellow-400 hover:text-yellow-400 transition"
                  }
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </motion.article>

          {/* Image */}
          <motion.article
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={image}
              alt="Profile"
              className="w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-yellow-400"
            />
          </motion.article>

          {/* Scroll Indicator */}
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

export default HomeComponent;

