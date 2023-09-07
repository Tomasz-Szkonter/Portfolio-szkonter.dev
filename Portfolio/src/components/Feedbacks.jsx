import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-dark-100 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1 ">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1 text-white">
        <div className="flex-1 flex flex-col">
          <p className="flex items-center text-white font-medium text-[16px]">
            <span className="primary-text-gradient mr-1 mb-1">@ </span> {name}
          </p>
          <p className="mt-1 text-primary text-[14px]">
            {designation} of {company}
          </p>
        </div>
        <img src={image} alt={`feedback-by-${name}`} className="w-12 h-12 rounded-full object-cover" />
      </div>
    </div>
    
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="relative w-full h-full mx-auto overflow-hidden">
      <div className="flex w-full h-full justify-center items-center ">
        <div className="flex w-full marker:h-full flex-col bg-dark-200 p-[50px] shadow-section">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText + ` text-white`}>Testimonials.</h2>
          </motion.div>
        </div>
      </div>
      <div className={`${styles.paddingX} mt-5 pb-14 flex flex-wrap gap-7 justify-center`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard 
              key={testimonial.name}
              index={index}
              {...testimonial}
            />            
          ))}
        </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");