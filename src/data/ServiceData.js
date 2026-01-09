// data/ServiceData.js
import WebTutorIcon from '../../public/images/TutorshipIcon.png';
import FrontendDevIcon from '../../public/images/FrontendIcon.png';
import ResponsiveIcon from '../../public/images/ResponsiveIcon.png';
import PerformanceIcon from '../../public/images/OptimizationIcon.png';


export const serviceData = {
  title: "Our Services",
  subtitle: "What We Offer",
  description:
    `As a passionate frontend developer and educator, I deliver cutting-edge solutions to empower your business with intuitive, high-performance web experiences. From hands-on Web Dev tutorship to crafting responsive, optimized applications, my services are designed to fuel growth, streamline operations, and captivate users—whether you're a startup scaling up or an individual hungry to master modern web technologies.`,
  services: [
    {
      icon: WebTutorIcon, // replace with your icons/images
      title: "Web Dev Tutor",
      description: `I'm experienced in teaching web development to aspiring learners with the drive to grow and excel. Through personalized sessions, I demystify concepts in HTML, CSS, JavaScript, and frameworks like React, helping you build a strong foundation and launch your dev career confidently.`,
    },
    {
      icon: FrontendDevIcon,
      title: "Frontend Development",
      description: `I specialize in building fast, interactive websites using React, Vue.js, Tailwind CSS, and TypeScript. My component-driven approach ensures scalable UIs that integrate seamlessly with APIs, delivering dynamic apps tailored to your brand's voice and goals.`,
    },
    {
      icon: ResponsiveIcon,
      title: "Responsive Design",
      description: `Creating fluid, device-agnostic layouts with CSS Grid, Flexbox, and media queries, I ensure your site shines on desktops, tablets, and mobiles—boosting accessibility and user engagement without compromising aesthetics.`,
    },
    {
      icon: PerformanceIcon,
      title: "Performance Optimization",
      description: `I fine-tune sites for speed and efficiency using tools like Lighthouse, lazy loading, and code splitting, while enhancing accessibility and SEO. The result? Lightning-fast loads, superior Core Web Vitals scores, and a competitive edge in search rankings.`,
    },
  ],
};
