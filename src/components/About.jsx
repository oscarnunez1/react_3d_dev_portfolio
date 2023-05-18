import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index * 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow card'
      >
        <div
          options={{
            max: 45,
            scale: 2,
            speed: 250
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon} 
            alt={title} 
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a full-stack software engineer and General Assembly alumnus, my career in technology is driven by an unyielding passion for creative innovation, an analytical mindset, and a meticulous eye for detail.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >        
        My multifaceted experience in software development has honed my proficiency in building cutting-edge applications. I pride myself on my adaptability and rapid learning—traits which I consider instrumental in the ever-evolving landscape of technology.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >        
        In addition to my professional endeavors, I maintain a rich array of interests that span from photography and drone piloting, to architecture-centric writing and guitar playing, not forgetting my zest for travel. By harmonizing my work-life integration, I channel this diverse creativity into my software engineering practice.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >        
        If you're in search of a dynamic contributor who can enrich your team with diverse skills and bring innovative solutions, I'd be thrilled to discuss how my abilities can contribute to your organization's goals. Let's collaborate to shape the future of technology and create a lasting impact together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            index={index} {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')