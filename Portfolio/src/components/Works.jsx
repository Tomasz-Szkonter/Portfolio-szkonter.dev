import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, scource_code_link}) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full sm:w-[31%]">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="w-full primary-dark-gradient rounded-[20px] p-[1px] shadow-card_2"
      >
        <div className="relative w-full h-[240px] bg-white rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open((scource_code_link, "_blank"))}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-3/4 h-3/4 object-contain" />
            </div>
          </div>
        </div>
        <div>

        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div className="relative w-full h-full mx-auto overflow-hidden">
      <div className="flex w-full h-full justify-center items-center ">
        <div className="flex w-full marker:h-full flex-col bg-white p-[50px] shadow-section">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText} >
              My work
            </p>
            <h2 className={styles.sectionHeadText} >
              Projects.
            </h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn("", ", 0.1, 1")}
              className="mt-3 text-dark-100 text-[17px] max-w-3xl leading-[30px]" 
            >
              With over three years of experience as a web developer,
              I have undertaken diverse projects both as a freelancer and an employee at a software house. 
              My expertise primarily revolves around constructing websites for business clients, 
              utilizing content management systems such as WordPress, 
              Webflow and HubSpot CMS and developing React.JS front-end.
            </motion.p>
          </div>

          <div className="mt-20 flex flex-wrap gap-7 justify-center">
            {projects.map((project, index) => (
              <ProjectCard 
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");