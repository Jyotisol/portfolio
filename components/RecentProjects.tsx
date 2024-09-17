/* eslint-disable @next/next/no-img-element */
'use client'

import { projects } from '@/data'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

interface Project {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
  }

  const RecentProjects: React.FC = () => {

const ProjectCard: React.FC<Project> = ({ id, title, des, img, iconLists, link }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className='sm:h-[41rem] h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <PinContainer title={title} href={link}>
        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
          <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
            <img src="/bg.png" alt="bg-img" className='absolute w-full h-full object-cover' />
          </div>
          <motion.img 
            src={img} 
            alt={title} 
            className='z-10 absolute bottom-0'
            initial={{ scale: 0.9 }}
            animate={{ scale: isInView ? 1 : 0.9 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
          {title}
        </h1>
        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
          {des}
        </p>
        <div className='flex items-center justify-between mt-7 mb-3'>
          <div className='flex items-center'>
            {iconLists.map((icon, index) => (
              <motion.div 
                key={icon} 
                className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                style={{ transform: `translateX(-${5 * index * 2}px)` }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -10 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              >
                <img src={icon} alt={icon} className='p-2' />
              </motion.div>
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <p className='flex lg:text-xl text-sm text-purple'>Check Live Site</p>
            <FaLocationArrow className='ms-3' color='#CBACF9'/>
          </div>
        </div>
      </PinContainer>
    </motion.div>
  );
};

  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        A small selection of {''}
        <span className='text-purple'>
          recent projects
        </span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-2 mt-5'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <ProjectCard 
            key={id}
            id={id}
            title={title}
            des={des}
            img={img}
            iconLists={iconLists}
            link={link}
          />
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
