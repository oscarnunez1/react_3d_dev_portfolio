import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github, demo } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="flex justify-between items-center mt-5 mb-3">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          
          <div className="flex gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github} 
                alt="github"
                className="w-full h-full object-contain"
              />
            </div>
            <div 
              onClick={() => window.open(demo_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={demo} 
                alt="demo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mt-2 text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-14px ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Projects = () => {
  return (
    <>
      <motion.div  variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h1 className={styles.sectionHeadText}>
          Projects.
        </h1>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          Explore the diverse array of projects I've crafted with passion, skill, and an insatiable curiosity for innovation. Each project encapsulates my professional journey and serves as a testament to my dedication to cutting-edge technology. Feel free to interact with the demos, inspect the repositories, or even run the code locally to gain insights into my expertise.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects")