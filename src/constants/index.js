import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Sabir Ali, a passionate and skilled Full-Stack Web Developer with expertise in the MERN stack. I specialize in creating dynamic, responsive, and user-friendly web applications tailored to meet unique client needs. With a creative mindset and a focus on modern web technologies, I aim to deliver exceptional digital experiences that drive results.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Empolyee Management Tool",
    description: "A powerful tool to efficiently manage employee records, roles, attendance, and performance in a centralized system.",
    image: projects1,
    link: "https://github.com/sabirsheik/commingsoon",
    buttonText : "View On GitHub"
  },
  {
    name: "Shoe Company",
    description: "A stylish and dynamic landing page designed to showcase a shoe company's latest collections and boost online sales.",
    image: projects2,
    link: "https://01-the-shoe-company.vercel.app/",
    buttonText : "View Landing Page"
  },
  {
    name: "3D Animated Portfolio",
    description: "A visually captivating 3D animated portfolio showcasing skills, projects, and creativity in an interactive experience.",
    image: projects3,
    link: "https://3-d-animated-portfolio-tau.vercel.app/",
    buttonText : "View 3D Portfolio"
  },
  {
    name: "KFC Clone",
    description:
      "A static KFC clone website replicating the original design and layout for practice and presentation purposes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxitPAuj1fO3AjlVtg27fBcQbMb6ekGxvIKA&s",
    link: "fc-project-sage.vercel.app",
    buttonText : "View KFC Clone"
  },
  {
    name: "MERN Application",
    description: "A full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) for seamless frontend and backend integration.",
    image: projects5,
    link: "https://github.com/sabirsheik/commingsoon",
    buttonText : "View On GitHub"
  },
  {
    name: "WellNest",
    description: "A wellness app for mental and physical health improvement",
    image: projects6,
    link: "https://github.com/sabirsheik/wellnest",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I am passionate about building dynamic and scalable web applications that provide seamless user experiences.",
    "Focused on continuous learning and improvement, I stay up to date with the latest technologies to deliver high-quality solutions. I enjoy working in collaborative environments and am driven to create innovative products that meet both business and user needs.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "Now",
    title: "Full Stack Web Developer & MERN Stack Developer at Fiverr",
    location: "Remote",
    description: [
        "Delivered customized web solutions for diverse clients using the MERN stack.",
        "Collaborated with clients to analyze requirements and implement tailored features.",
        "Maintained high client satisfaction through timely project delivery and quality code."
    ],
  },
  {
    yearRange: "2023 — 2024",
    title: "MERN Stack Developer at Nexcus Berry",
    location: "Lahore",
    description: [
        "Developed dynamic, responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Integrated third-party APIs and optimized database queries for improved performance.",
        "Implemented state management solutions using Redux to enhance application scalability.",
        "Ensured code quality through regular reviews, testing, and debugging.",
        "Contributed to the design and deployment of secure RESTful APIs."
    ],
  },
  {
    yearRange: "2018 — 2021",
    title: "Full Stack Developer at EHunar.org",
    location: "Remote",
    description: [
        "Developed and maintained full-stack web applications using the MERN stack.",
        "Collaborated with cross-functional teams to design, implement, and optimize features.",
        "Integrated RESTful APIs and managed database operations to ensure seamless data flow.",
        "Wrote clean, scalable, and maintainable code, adhering to best practices.",
        "Led junior developers and conducted code reviews to improve code quality."
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

import { FaFacebook, FaDiscord, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://web.facebook.com/SabirDev0",
    Icon: FaFacebook,
  },
  {
    href: "https://discord.com/channels/1322622108920053801/1322622111822643242",
    Icon: FaDiscord,
  },
  {
    href: "https://instagram.com/",
    Icon: FaInstagram,
  },
  {
    href: "https://twitter.com/",
    Icon: FaTwitter,
  },
  {
    href: "https://github.com/sabirsheik",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/sabir-ali-837501340/",
    Icon: FaLinkedin,
  },
];
