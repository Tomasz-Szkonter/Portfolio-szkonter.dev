import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Feedbacks = () => {
  return (
    <div className="relative w-full h-full mx-auto overflow-hidden">
      <div className="flex w-full h-full justify-center items-center ">
        <div className="flex w-full marker:h-full flex-col bg-white p-[50px] shadow-section">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");