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
    image: "https://i.postimg.cc/mZX3J035/1-1.png",
    link: "https://github.com/sabirsheik/commingsoon",
    buttonText : "View On GitHub"
  },
  {
    name: "Shoe Company",
    description: "A stylish and dynamic landing page designed to showcase a shoe company's latest collections and boost online sales.",
    image: "https://i.postimg.cc/pTg8CnnY/abc.jpg",
    link: "https://01-the-shoe-company.vercel.app/",
    buttonText : "View Landing Page"
  },
  {
    name: "3D Animated Portfolio",
    description: "A visually captivating 3D animated portfolio showcasing skills, projects, and creativity in an interactive experience.",
    image: "https://i.postimg.cc/FKX00S3y/bbc.avif",
    link: "https://3-d-animated-portfolio-tau.vercel.app/",
    buttonText : "View 3D Portfolio"
  },
  {
    name: "KFC Clone",
    description:
      "A static KFC clone website replicating the original design and layout for practice and presentation purposes.",
    image: "https://i.postimg.cc/0yTnt5qg/projects4.png",
    link: "https://kfc-project-sage.vercel.app/",
    buttonText : "View KFC Clone"
  },
  {
    name: "MERN Application",
    description: "A full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) for seamless frontend and backend integration.",
    image: "https://www.docker.com/app/uploads/2022/09/Docker_blog_MERN_Stack_Featured_image_650x650_v1.png",
    link: "https://github.com/sabirsheik/commingsoon",
    buttonText : "View On GitHub"
  },
  {
    name: "E-Commerce Application",
    description: "An e-commerce application is a platform that enables users to buy and sell products or services online with features like product listings, shopping carts, and secure payment processing.",
    image: "https://i.postimg.cc/NjGNm1x3/1.png",
    link: "https://github.com/sabirsheik/commingsoon",
    buttonText : "View On GitHub "
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
    name: "John Doe",
    title: "CEO, TechSolutions",
    feedback:
      "Sabir is an exceptional developer with a keen eye for detail. His ability to deliver high-quality projects on time is impressive, and his expertise in the MERN stack made a significant impact on our latest project., and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Rana M.Ajmal",
    title: "CEO, NexcusBerry Training",
    feedback:
      "Working with Sabir was an amazing experience. His understanding of full-stack development and his eagerness to learn and grow make him a standout in the industry.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Sabir's ability to translate complex requirements into intuitive, functional solutions is unmatched. He’s highly skilled in React and Node.js, making him a valuable asset to any team.",
    image: person3,
  },
  {
    name: "Ali Khan",
    title: "Lead Developer, Ehunar",
    feedback:
      "Sabir is a highly motivated developer with strong technical skills. His ability to solve problems and work collaboratively with the team makes him a joy to work with.",
    image: person4,
  },
  {
    name: "Emily Watson",
    title: " E-commerce Store Owner, USA (Connected via Fiverr)",
    feedback:
      "Sabir delivered a fully functional e-commerce website for my online store. His communication was smooth, and the project was completed faster than expected with amazing quality. Highly recommended!",
    image: person5,
  },
  {
    name: "Liam Carter",
    title: "Tech Consultant, UK (Connected via LinkedIn)",
    feedback:
      "I reached out to Sabir through LinkedIn for a web maintenance task. He not only fixed the issues quickly but also optimized the performance of our web app. A true professional!",
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
