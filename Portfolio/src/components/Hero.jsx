import { motion } from 'framer-motion';
import { styles } from '../styles';
import { LogoModel } from './canvas';

const Hero = () => {
  return (
    // bg-hero-pattern-alt
    <section className="relative w-full h-screen mx-auto  bg-no-repeat bg-cover overflow-hidden "> 
      <div className={`${styles.paddingX} pt-24 flex h-full justify-start sm:justify-center items-center flex-col sm:flex-row`}>
        <div className={`w-full sm:w-7/12 sm:h-full py-[50px] sm:p-[50px] flex justify-start items-start shadow-hero bg-white rounded-tl-2xl gap-8`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rotate-45 bg-primary rounded-l" />
            <div className="w-1 sm:h-80 h-40 primary-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-dark-100`}>
              Hi, I am <span className="text-[#2ECC71]">Tomasz</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-dark-100`}>
              crafting seamless user interfaces,  
              <br className="sm:block hidden" /> powerful web applications and <br className="sm:block hidden" />
              results-driven business websites.
            </p>
          </div>
        </div>

        <div className={`w-full sm:w-5/12 h-[450px] sm:h-full flex justify-center items-center  rounded-tr-2xl`}>
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