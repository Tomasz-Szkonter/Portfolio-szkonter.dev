import { motion } from "framer-motion";
import { styles } from "../styles";
import { LogoModel } from "./canvas";
import { logo } from "../assets";

const Hero = () => {
  return (
    // bg-hero-pattern-alt
    <section className="relative w-full h-screen mx-auto  bg-no-repeat bg-cover overflow-hidden ">
      <div
        className={`${styles.paddingX} pt-24 flex h-full justify-start sm:justify-center items-center flex-col-reverse sm:flex-row`}
      >
        <div
          className={`w-full sm:w-7/12 sm:h-full py-[50px] sm:p-[50px] flex flex-col justify-evenly items-start shadow-hero bg-white rounded-tl-2xl gap-8`}
        >
          <div className="w-full flex flex-row">
            <div className="flex-col justify-center items-center mt-5 mr-5  hidden xs:flex">
              <div className="w-5 h-5 rotate-45 bg-primary rounded-l" />
              <div className="w-1 sm:h-80 h-40 primary-gradient" />
            </div>

            <div>
              <h1
                className={`${styles.heroHeadText} text-dark-100 sm:leading-[5rem]`}
              >
                Hi, I am <span className="text-[#2ECC71]">Tomasz</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-dark-100`}>
                Crafting seamless user interfaces,
                <br className="sm:block hidden" /> powerful web applications and{" "}
                <br className="sm:block hidden" />
                results-driven business websites.
              </p>
            </div>
          </div>

          <div className="flex justify-start align-middle flex-wrap">
            <a
              href="#work"
              className="bg-primary hover:bg-white text-[18px] py-2 px-4 xs:py-3 xs:px-8 mr-[1rem] xs:mr-[2rem] mb-[1rem] xs:mb-[2rem] outline-none w-fit text-white hover:text-primary border-2 border-primary shadow-md rounded-lg whitespace-nowrap cursor-pointer font-medium ease-in-out duration-300">
              My experience
            </a>
            <a
              href="#contact" 
              className="bg-white hover:bg-dark-100 text-[18px] py-2 px-4 xs:py-3 xs:px-8 mb-[1rem] xs:mb-[2rem] outline-none w-fit text-dark-100 hover:text-white border-2 border-dark-100 shadow-md rounded-lg whitespace-nowrap cursor-pointer font-medium ease-in-out duration-300">
              Contact me
            </a>
          </div>
        </div>

        <div
          className={`w-full sm:w-5/12 sm:h-full flex justify-center items-center  rounded-tr-2xl`}
        >
          <div className="relative w-full h-full z-10 hidden lg:block">
            <LogoModel className="testing-my-canvas" />
          </div>
          <div className="w-full h-full flex justify-center items-center lg:hidden self-end justify-self-end">
            <img src={logo} alt="Szkonter Development Logo" className="w-[150px] sm:w-[225px] "/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
