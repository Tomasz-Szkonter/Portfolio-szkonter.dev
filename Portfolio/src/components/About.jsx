import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full primary-dark-gradient p-[1px] rounded-[20px] shadow-card_2">
        <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"> 
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-dark-100 text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div className="relative w-full h-full mx-auto overflow-hidden">
      <div className="flex w-full h-full justify-center items-center ">
        <div className="flex w-full marker:h-full flex-col bg-white py-[50px] sm:p-[50px] shadow-section">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText} >
              Introduction
            </p>
            <h2 className={styles.sectionHeadText} >
              Overview.
            </h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-dark-200 text-[17px] max-w-3xl leading-30">
            <p className="mt-1">
              Having immersed myself in the world of web development for over three years, I've gathered a ton of experience under my belt. 
              I've worn multiple hats - sometimes working solo as a freelancer, and other times jumping into the mix at respected software houses.</p>
            <p className="mt-3">
              My sweet spot is creating top-notch websites that cater to the specific needs of businesses. 
              I've got the hang of popular content management systems like WordPress, Webflow, and HubSpot CMS - they're like my trusted tools. But hey, it doesn't stop there! 
              I'm also pretty skilled at cooking up robust web applications that really push the envelope when it comes to digital innovation.</p>
          </motion.p>
          <div className="mt-20 flex flex-wrap justify-center gap-10">


            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
