import React, { useState, useEffect } from "react";
import { contactData } from "../data/ContactData";
import { motion } from "framer-motion";
import HeroSkeleton from "./HeroSkeleton";

const ContactComponent = () => {
  const { title, subtitle, description, email, whatsapp, socials } = contactData;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="contact-section"
      className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-16"
    >
      {/* SEO-friendly hidden heading */}
      <h1 className="sr-only">{title}</h1>

      {loading ? (
        <HeroSkeleton />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl w-full"
        >
          {/* Header */}
          <p className="text-yellow-400 tracking-widest text-sm mb-2">{subtitle}</p>
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-gray-300 mb-8">{description}</p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href={`mailto:${email}`}
              className="px-6 py-3 rounded-full bg-yellow-400/90 backdrop-blur-md text-black font-medium hover:bg-yellow-300 transition"
            >
              Email Me
            </a>
            <a
              href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              WhatsApp
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="w-12 h-12 flex items-center justify-center bg-gray-900/50 backdrop-blur-md rounded-full hover:scale-110 transition"
              >
                <img src={social.icon} alt={social.name} className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ContactComponent;
