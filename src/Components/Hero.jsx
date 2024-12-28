import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import Sabir from "../assets/Sabir.jpg";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { clipPath: "inset(0 10% 0 10%)", opacity: 0 },
    visible: {
      clipPath: "inset(0 0% 0 0%)",
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div
        className="relative z-10 min-h-screen flex flex-wrap flex-col max-w-6xl mx-auto
        md:flex-row items-center justify-center text-white"
      >
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-lg md:text-2xl lg:text-3xl my-10"
            variants={textVariants}
          >
            {HERO_CONTENT.greeting}
          </motion.h1>
          <motion.p
            className="text-md md:text-lg lg:text-xl mb-6"
            variants={textVariants}
          >
            {HERO_CONTENT.introduction}
          </motion.p>
          <motion.p
            className="text-sm md:text-md lg:text-lg mb-6"
            variants={textVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>
          <motion.a
            className="bg-stone-50 text-stone-900 p-3 lg:p-4
                mt-8 inline-block rounded-2xl text-xs md:text-sm"
            href={HERO_CONTENT.resumeLink}
            variants={textVariants}
            target="_blank"
            download
            rel="noreferrer"
          >
            {HERO_CONTENT.resumeLinkText}
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:mt-[50px] md:w-1/2 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={imageVariants}
        >
          <img src={Sabir} alt="Sabir Pic" className="rounded-3xl w-[400px]" />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
