import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    
    contentStyle={{ background: '#ffffff', color: '#263547'}}
    contentArrowStyle={{ borderRight: '12px solid #2ECC71' }} 
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div>
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div className='bg-white'>
      <h3 className="block text-dark-100 text-[24px] font-bold bg-white p-[1rem]">
        {experience.title}
      </h3>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <div className="relative w-full h-full mx-auto overflow-hidden">
      <div className="flex w-full h-full justify-center items-center ">
        <div className="flex w-full marker:h-full flex-col bg-white p-[50px]">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText} >
              What I have done so far
            </p>
            <h2 className={styles.sectionHeadText} >
              Work Experience.
            </h2>
          </motion.div>

          <div className="mt-20 flex flex-col">
            <VerticalTimeline >
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience}  />
              ))}
            </VerticalTimeline>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, "work")