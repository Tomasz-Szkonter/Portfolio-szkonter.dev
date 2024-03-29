import { motion } from "framer-motion"

import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = (Component, idName) => 
function HOC() {

    let sectionName       = `section__` + `${idName}`;
    let sectionBackground = `sectionBackground_` + `${idName}`;
    let sectionColor      = `sectionColor_` + `${idName}`

    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${sectionName} ${styles.paddingX} ${sectionBackground} ${sectionColor} relative z-0 bg-no-repeat bg-cover`}>

            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper