import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import Sabir from "../assets/Sabir.jpg";

const Hero = () => {
  const isMobile = window.innerWidth < 768; // Check if the device is mobile

  const textVariants = !isMobile
    ? {
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }
    : {};

  const imageVariants = !isMobile
    ? {
        hidden: { opacity: 0, x: 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }
    : {};

  return (
    <div className="mt-50 mt-12 relative z-10 min-h-screen flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-center text-white">
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 p-8"
        initial={!isMobile ? "hidden" : undefined}
        whileInView={!isMobile ? "visible" : undefined}
        viewport={!isMobile ? { once: true, amount: 0.2 } : undefined}
        variants={textVariants}
      >
        <h1 className="text-lg md:text-2xl lg:text-3xl my-10">
          {HERO_CONTENT.greeting}
        </h1>
        <p className="text-md md:text-lg lg:text-xl mb-6">
          {HERO_CONTENT.introduction}
        </p>
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
        className="w-full md:w-1/2 p-8"
        initial={!isMobile ? "hidden" : undefined}
        whileInView={!isMobile ? "visible" : undefined}
        viewport={!isMobile ? { once: true, amount: 0.2 } : undefined}
        variants={imageVariants}
      >
        <img
          src={Sabir}
          alt="Sabir Pic"
          className="rounded-3xl w-[400px]"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
