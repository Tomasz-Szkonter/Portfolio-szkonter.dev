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
        <div className="flex w-full marker:h-full flex-col bg-white p-[50px] shadow-section">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText} >
              Introduction
            </p>
            <h2 className={styles.sectionHeadText} >
              Overview.
            </h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-dark-200 text-[17px] max-w-3xl leading-30">
            With over three years of experience as a web developer,
            I have undertaken diverse projects both as a freelancer and an employee at a software house. 
            My expertise primarily revolves around constructing websites for business clients, 
            utilizing content management systems such as WordPress, 
            Webflow and HubSpot CMS and developing React.JS front-end.
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
