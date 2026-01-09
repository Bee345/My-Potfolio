// data/ProjectData.js
import image1 from "../../public/images/ObitexImage.jpeg";
import image2 from "../../public/images/KencodeitImg.jpeg";
import image3 from "../../public/images/CoffeeAppImg.jpeg";
import image4 from "../../public/images/TekoraImg.jpeg";
import image5 from "../../public/images/PaynextImg.jpeg";
import image6 from "../../public/images/LightImg.jpeg";
import image7 from "../../public/images/GuranteeImg.jpeg";


export const projectData = {
  title: "Projects",
  subtitle: "Selected Works",
  description:
    "Dive into my 3+ years of handcrafted gems—frontend-fueled with React/Vue wizardry for silky UIs and animations, laced with intermediate backend smarts (Node/Laravel APIs) for seamless data flows, these are few out of em all. Obsessed with 95+ Lighthouse scores, WCAG accessibility, and UX that hooks users? These builds deliver: scalable, inclusive, and unapologetically performant. Ready to geek out?",

  projects: [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "At Orbitex Solar Energy Resources, we are dedicated to illuminating futures through accessible, premium solar solutions. Our mission drives us to deliver affordable, high-efficiency systems— from rooftop panels to off-grid setups—that harness the sun's power, slashing energy costs and carbon footprints. Empowering communities in Nigeria and beyond, we foster sustainable independence, one installation at a time. Join us in building a greener tomorrow.",
      image: image1,
      stack: ["React", "Redux", "Tailwind", "Laravel"],
      live: "https://orbitexsolarenergy.com.ng",
    },
    {
      id: 2,
      title: "An Educational Tech Portfolio",
      description:
        "Kencodict Tech Global Limited is a tech-forward powerhouse empowering individuals through hands-on training and delivering premium digital services. We equip learners with actionable skills for career breakthroughs while fueling business expansion via cutting-edge design, development, and transformation solutions—bridging education and execution to forge tomorrow's innovators and problem-solvers.",
      image: image2,
      stack: ["React", "Laravel", "CSS"],
      live: "https://kencodicttech.com.ng/",
    },
    {
      id: 3,
      title: "Coffee Ordering Website",
      description:
        `Discover CoffeeSade, your online gateway to Ethiopia-born passion since 2018. Founded by aficionado Elena Sade, we ethically source beans from global small-scale farmers—roasted fresh in-house to capture Yirgacheffe's fruity zing or Brazilian Santos' chocolatey depth.
Shop our curated blends, single-origin gems, and signature kits: from the velvety Sade Latte syrup to pour-over essentials. Every order arrives in compostable packaging, backed by fair-trade partnerships and free brewing guides to spark your home rituals.`,
      image: image3,
      stack: ["React", "Redux", "Tailwind"],
      live: "https://coffe-sade.vercel.app/",
    },
    {
      id: 4,
      title: "An E-commerce Accessories Store",
      description:
        "Snag iPhones that snap pics like pros, Samsungs that outrun boredom, or budget Androids that keep pace—because why settle for slow when life's too fast? Armor your gear with cases tougher than your ex's excuses, chargers that juice quicker than coffee, and earbuds that drown out bad vibes from Apple, Anker, Spigen, and more. We deliver unbeatable prices, meme-fast shipping across Nigeria, Fort Knox-secure payments, and ghost-easy returns—your upgrade, zero hassle. Tap in, level up: in a world of scrolls, be the scroll-stopper.",
      image: image4,
      stack: ["HTML", "JS", "J-Querry", "PHP", "MySQL", "MVC", "CSS"],
      live: "https://tekora.globalinvestcapital.biz/",
    },
    {
      id: 5,
      title: "A Fintech Web Application",
      description:
        `Unlock smarter money moves with FinFlow—your all-in-one fintech hub for seamless banking, instant investments, and crypto trades. Powered by AI-driven insights, we secure your wealth with bank-grade encryption while slashing fees to zero. From budgeting pros to high-yield savings, empower your financial future in one tap. Secure, swift, unstoppable. Start flowing today. 💸`,
      image: image5,
      stack: ["HTML", "JS", "J-Querry", "PHP", "MySQL", "MVC", "CSS"],
      live: "https://payme.globalinvestcapital.biz/",
    },
    {
      id: 6,
      title: "E-Commerce Estate Website",
      description:
        `Unlock redefined luxury at Heaven’s Gate—your trusted e-commerce gateway to premium properties since 2012. Browse curated homes, villas, and investments for families and savvy buyers, with seamless virtual tours, transparent pricing, and elite concierge support. Trust, class, and zero hassle: Find your forever space today. 🏡 Elevate effortlessly.`,
      image: image6,
      stack: ["HTML", "JS", "J-Querry", "PHP", "MySQL", "MVC", "CSS"],
      live: "https://light.globalinvestcapital.biz/",
    },
    {
      id: 7,
      title: "A Delivery Website",
      description:
        `Revolutionize shipping with SwiftLogix—your on-demand logistics powerhouse for seamless deliveries, big or small. From same-day urban drops to cross-country hauls, we track every mile with real-time GPS, eco-smart routing, and AI-optimized pricing that slashes costs without the wait. Secure, scalable, and stupidly simple: Upload, ship, smile. Powering businesses and hustles across Nigeria—because in a rush world, we make logistics feel like magic. 🚚 Deliver the win. Start shipping now.`,
      image: image7,
      stack: ["HTML", "JS", "J-Querry", "PHP", "MySQL", "MVC", "CSS"],
      live: "http://guaranteed.globalinvestcapital.biz/",
    },
  ],
};
