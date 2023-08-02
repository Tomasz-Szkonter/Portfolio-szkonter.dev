import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern-alt bg-no-repeat bg-cover overflow-hidden">
      <div className={`${styles.paddingX}flex h-full justify-center items-center`}>
        <div className="flex h-full flex-col bg-white p-[50px]">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText} >
              Introduction
            </p>
            <h2 className={styles.sectionHeadText} >
              Overview
            </h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-dark-200 text-[17px] max-w-3xl leading-30">
            With over three years of experience as a web developer,
            I have undertaken diverse projects both as a freelancer and an employee at a software house. 
            My expertise primarily revolves around constructing websites for business clients, 
            utilizing content management systems such as WordPress, 
            Webflow and HubSpot CMS and developing React.JS front-end.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
