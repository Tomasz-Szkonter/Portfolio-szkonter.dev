import { motion } from 'framer-motion';

import { styles } from '../styles';
import { LogoModel } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern-1 bg-no-repeat bg-cover overflow-hidden ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rotate-45 bg-primary" />
          <div className="w-1 sm:h-80 h-40 primary-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#2ECC71]">Tomasz</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces,
            <br className="sm:block hidden" /> web applications and business
            websites
          </p>
        </div>
      </div>
      {/* <div className="relative w-full h-full z-10">
        <LogoModel className="testing-my-canvas" />
      </div> */}
    </section>
  );
};

export default Hero;