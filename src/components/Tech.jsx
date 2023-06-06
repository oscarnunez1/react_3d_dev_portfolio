import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"
import { styles } from "../styles"
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = ({ index }) => {
  return (
    <>
      <motion.div  variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <p className={styles.sectionSubText}>
          Languages, Frameworks, & Libraries
        </p>
        <h2 className={styles.sectionHeadText}>
          Tech Stack.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}> 
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")