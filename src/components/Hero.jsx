import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-120px max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-40">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/* <div className="flex justify-center items-start relative fixed"> */}
        <div className="mt-32">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Omkar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Software Developer, creating <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
        {/* <div className="rounded-full border-8 border-[#915eff] overflow-hidden w-44 h-44 mt-40 left-56 relative">
            <img
              src="src/assets/Testimonial/omkar.jpg"
              alt="profile"
              className="w-full h-full "
            />
          </div> */}
        {/* </div> */}
      </div>
      <ComputersCanvas />

      {/* <div
        className={`absolute xs:bottom-50 ${
          isMobile ? "comp-bottom" : "bottom-312"
        } w-full flex justify-center items-center `}
      >
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
      <div
        className={`absolute ${
          isMobile ? "bottom-[95px]" : "bottom-312"
        } w-full flex justify-center items-center`}
      >
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
