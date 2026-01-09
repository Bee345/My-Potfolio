// data/AboutData.js
import myImage from "../../public/images/My2024Pics.jpg";

// 📄 Documents (CV & Resume)
import cvFile from "../../public/documents/Chidubemagha_Michael_Ogbu_CV.pdf";
import resumeFile from "../../public/documents/Chidubemagha_Michael_Ogbu_Resume.pdf.pdf";

export const aboutData = {
  // 🧑 Personal Info
  personalInfo: {
    name: "Chidubemagha Michael Ogbu",
    address: "Peoples Club Junction, Nkpor, Onitsha, Anambra State, Nigeria",
    email: "coachmikkebeezee@gmail.com",
    phone: "+234 816 029 0926",
    zipcode: "434212",
  },

  // 🧠 About Section Content
  title: "About Me",
  subtitle: "Who I Am",
  description:
    `I'm a passionate frontend engineer with over 3 years in the industry, crafting modern, scalable web applications that prioritize clean UIs, fluid animations, and exceptional user experiences. My innovative, creative, and dynamic approach—paired with strong leadership and problem-solving skills—helps me tackle challenges head-on. While frontend is my core (React, Tailwind, performance optimization), I handle backend tasks when needed for full-stack flexibility.
My path began with grit: I worked customer support to save for my first PC, kickstarting my dev journey. I then joined a tech firm as a frontend developer and tutor, building responsive apps while mentoring newcomers. Now, as a freelance frontend specialist, I lead projects from concept to launch, delivering scalable solutions that drive business growth.
When not coding, I unwind with hobbies that fuel my creativity: listening to music for inspiration, reading books to expand horizons, playing video games for strategic fun, hiking to connect with nature, catching restorative sleep, and diving into meditation and research for personal growth.`,

  highlights: ["Innovation", "Quality", "Customer Satisfaction"],

  image: myImage,

  // 📊 Stats
  stats: [
    { number: "50+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
  ],

  // 📥 Downloadable Documents
  documents: [
    {
      label: "Download CV",
      file: cvFile,
      type: "cv",
    },
    {
      label: "Download Resume",
      file: resumeFile,
      type: "resume",
    },
  ],
};
