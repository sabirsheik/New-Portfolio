import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import Sabir from "../assets/Sabir.jpg";

const Hero = () => {
  const isMobile = window.innerWidth < 768;

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth ease-out
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: isMobile ? 50 : 100, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-6 py-12 mx-auto max-w-6xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Trigger animations on scroll up/down
    >
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 p-6 md:p-12 will-change-transform"
        variants={textVariants}
      >
        <h1 className="text-lg md:text-2xl lg:text-3xl my-10">{HERO_CONTENT.greeting}</h1>
        <p className="text-md md:text-lg lg:text-xl mb-6">{HERO_CONTENT.introduction}</p>
        <a
          className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl text-xs md:text-sm"
          href={HERO_CONTENT.resumeLink}
          target="_blank"
          download
          rel="noreferrer"
        >
          {HERO_CONTENT.resumeLinkText}
        </a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 pt-10 flex justify-center items-center md:ml-14 will-change-transform"
        variants={imageVariants}
      >
        <img
          src={Sabir}
          alt="Sabir Pic"
          className="rounded-3xl w-[400px]"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
