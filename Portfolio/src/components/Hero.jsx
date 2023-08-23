import { motion } from 'framer-motion';
import { styles } from '../styles';
import { LogoModel } from './canvas';

const Hero = () => {
  return (
    // bg-hero-pattern-alt
    <section className="relative w-full h-screen mx-auto  bg-no-repeat bg-cover overflow-hidden "> 
      <div className={`${styles.paddingX} pt-48 flex h-full justify-center items-center drop-shadow-2xl`}>
        <div className={`w-4/6 h-full p-[50px] flex justify-start items-start bg-white rounded-tl-2xl gap-8`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rotate-45 bg-primary rounded-l" />
            <div className="w-1 sm:h-80 h-40 primary-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-dark-100`}>
              Hi, I am <span className="text-[#2ECC71]">Tomasz</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-dark-100`}>
              I develop user interfaces,
              <br className="sm:block hidden" /> web applications and business
              websites
            </p>
          </div>
        </div>

        <div className={`w-2/6 h-full flex justify-center items-center bg-dark-100/70 rounded-tr-2xl`}>
          <div className="relative w-full h-full z-10">
            <LogoModel className="testing-my-canvas" />
          </div>
        </div>
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-2 border-dark-100 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-dark-100 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;