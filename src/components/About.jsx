import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { links } from '../constants'

const LinkCard = ({ index, name, icon, url }) => {
  const isResume = name.toLowerCase() === 'resume';

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index * 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow card'
      >
        <a
          href={url}
          download={isResume}
          target={isResume ? '' : '_blank'}
          rel={isResume ? '' : 'noopener noreferrer'}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon} 
            alt={name} 
            className='w-32 h-32 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
        </a>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Overview
        </p>
        <h2 className={styles.sectionHeadText}>
          About Me.
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
        {links.map((link, index) => (
          <LinkCard 
            key={link.name}
            index={index} {...link}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')