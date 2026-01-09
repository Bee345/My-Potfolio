import React, { useState, useEffect } from "react";
import { serviceData } from "../data/ServiceData";
import { motion } from "framer-motion";
import HeroSkeleton from "./HeroSkeleton";


const ServiceComponent = () => {
  const { title, subtitle, description, services } = serviceData;
  const [loading, setLoading] = useState(true);
  


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="services-section"
      className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-16"
    >
      {/* SEO-friendly hidden heading */}
      <h1 className="sr-only">{title}</h1>

      {loading ? (
        <HeroSkeleton />
      ) : (
        <>
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-yellow-400 tracking-widest text-sm mb-2">
              {subtitle}
            </p>
            <h2 className="text-white text-4xl sm:text-5xl font-bold">{title}</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{description}</p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-white text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ServiceComponent;
