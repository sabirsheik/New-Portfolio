import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import Sabir from "../assets/Sabir.jpg";

const Hero = () => {
  const isMobile = window.innerWidth < 768;

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: isMobile ? 0.6 : 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { clipPath: "inset(0 10% 0 10%)", opacity: 0 },
    visible: {
      clipPath: "inset(0 0% 0 0%)",
      opacity: 1,
      transition: {
        duration: isMobile ? 0.8 : 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="mt-50 relative z-10 min-h-screen flex flex-wrap flex-col max-w-6xl mx-auto md:flex-row items-center justify-center text-white">
      <motion.div
        className="w-full md:w-1/2 p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={textVariants}
      >
        <motion.h1 className="text-lg md:text-2xl lg:text-3xl my-10">
          {HERO_CONTENT.greeting}
        </motion.h1>
        <motion.p className="text-md md:text-lg lg:text-xl mb-6">
          {HERO_CONTENT.introduction}
        </motion.p>
        <motion.a
          className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl text-xs md:text-sm"
          href={HERO_CONTENT.resumeLink}
          target="_blank"
          download
          rel="noreferrer"
        >
          {HERO_CONTENT.resumeLinkText}
        </motion.a>
      </motion.div>
      <motion.div
        className="w-full md:mt-[50px] md:w-1/2 p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
