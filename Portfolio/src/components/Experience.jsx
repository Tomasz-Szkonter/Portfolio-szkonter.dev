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
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[80%] h-[80%] object-contain rounded-full"
        />
      </div>
    }
  >
    <div className='bg-white rounded-t-[3px]'>
      <h3 className="block text-dark-100 text-[24px] font-bold bg-white px-[1rem] pt-[1rem] rounded-xl">
        {experience.title}
      </h3>
      <p className='text-primary text-[16px] font-semibold px-[1rem] pb-[1rem] uppercase' style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className='space-y-2 px-[1rem] pb-[1rem] bg-white list-none rounded-b-[3px]'>
      {experience.points.map((point, index) => (
        <div className='flex bg-white m-0 p-0'>
          <span className='flex mt-[4px] mr-2'> 
              <div className="w-3 h-3 rotate-45 rounded-m primary-dark-gradient" />
          </span>
          <li
            key={`experience-point-${index}`}
            className='text-dark-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        </div>
      ))}
    </ul>

  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <div className="relative w-full h-full mx-auto overflow-hidden">
      <div className="flex w-full h-full justify-center items-center ">
        <div className="flex w-full marker:h-full flex-col bg-white py-[50px] sm:p-[50px]  shadow-section">
          <motion.div variants={textVariant()} className='px-6'>
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
                <ExperienceCard key={index} experience={experience} />
              ))}
            </VerticalTimeline>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, "work")