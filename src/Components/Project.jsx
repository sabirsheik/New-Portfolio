import { motion } from "framer-motion";
import { PROJECTS } from "../constants/index.js";

const Project = () => {
  const isMobile = window.innerWidth < 768; // Check if the device is mobile

  // Define animation variants
  const getVariants = (index) => {
    if (!isMobile) {
      // Desktop animation: Vertical (Y-axis)
      return {
        hidden: {
          opacity: 0,
          transform: "translateY(50px) scale(0.9)", // Slide from bottom
        },
        visible: {
          opacity: 1,
          transform: "translateY(0) scale(1)", // Normal position
          transition: {
            duration: 0.8, // Slightly increased for smoother effect
            ease: "easeOut", // Smooth deceleration
            delay: index * 0.15, // Increased stagger for better spacing
          },
        },
      };
    }

    // Mobile animation: Horizontal (X-axis)
    return {
      hidden: {
        opacity: 0,
        transform: `translateX(${index % 2 === 0 ? "-30px" : "30px"})`, // Slide from left or right
      },
      visible: {
        opacity: 1,
        transform: "translateX(0)", // Normal position
        transition: {
          duration: 0.7, // Faster for mobile
          ease: "easeOut",
          delay: index * 0.1, // Smaller stagger for compact layout
        },
      },
    };
  };

  return (
    <section className="px-6 md:px-10 py-12 overflow-hidden" id="work">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mt-10 mb-10">
        Work
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden h-[400px] md:h-[500px] transition-transform transform hover:scale-105 focus:scale-105 hover:cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Ensures it works for scrolling in and out
            variants={getVariants(index)} // Apply appropriate variant
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy" // Optimized for performance
            />

            {/* Overlay Content */}
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
