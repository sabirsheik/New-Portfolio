import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants/index";

const About = () => {
    const isMobile = window.innerWidth < 768; 

    const textVariants = {
        hidden: { opacity: 0, y: isMobile ? 60 : 120 }, 
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="px-6 py-10" id="about">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
                About
            </h1>
            <div className="h-1 w-20 mb-8 bg-white"></div>
            <div className="max-w-4xl mx-auto">
                {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                    <motion.div
                        key={index}
                        className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed will-change-transform"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }} 
                        variants={textVariants}
                    >
                        {paragraph}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default About;
