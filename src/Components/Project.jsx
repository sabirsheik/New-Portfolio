import { motion } from "framer-motion";
import { PROJECTS } from "../constants/index.js";

const Project = () => {
  const isMobile = window.innerWidth < 768; // Check if the device is mobile

  const getVariants = (index) => {
    if (!isMobile) {
      return {
        hidden: { opacity: 0, scale: 0.8, rotate: -40, y: 50 },
        visible: {
          opacity: 1,
          scale: 1,
          rotate: 0,
          y: 0,
          transition: {
            duration: 0.6, // Reduced duration for smoother animations
            ease: "easeOut",
            type: "spring",
            bounce: 0.4, // Reduced bounce for less abrupt movement
          },
        },
      };
    }

    // Mobile-specific animations (simpler for better performance)
    return {
      hidden: { opacity: 0, x: index % 2 === 0 ? -80 : 80 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5, // Shorter duration for mobile
          ease: "easeOut",
        },
      },
    };
  };

  return (
    <section className="px-6 md:px-10 py-12 overflow-hidden" id="work">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mt-10 mb-10">
        Work
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden h-[400px] md:h-[500px] transition-transform"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={getVariants(index)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy" // Lazy loading for better performance
            />
            <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white">
              <h2 className="text-2xl font-medium mb-4">{project.name}</h2>
              <div className="flex flex-col justify-between">
                <p className="mb-4 flex-grow text-md md:text-xl">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-stone-900 rounded-full py-2 px-4 text-center"
                >
                  View On GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
