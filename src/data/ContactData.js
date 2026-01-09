
import Instagram from '../../public/images/InstagramIcon.png';
import X from '../../public/images/XIcon2.png';
import LinkedIn from '../../public/images/LinkedInIcon.png';
import Github from '../../public/images/GithubIcon.png';

export const contactData = {
  title: "Contact Me",
  subtitle: "Get in Touch",
  description:
    "Feel free to reach out for collaborations, freelance projects, or just to say hi! I'm available through email, WhatsApp, and social media.",
  email: "coachmikkebeezee@gmail.com",
  whatsapp: "+234 816 029 0926",
  socials: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/lil-beezee",
      icon: LinkedIn , // ✅ Use the actual component
    },
    {
      name: "Twitter",
      link: "https://x.com/BeezeeLil",
      icon: X , // ✅ Same here
    },
    {
      name: "GitHub",
      link: "https://github.com/Bee345",
      icon: Github,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/beezee288",
      icon: Instagram,
    },
  ],
};
