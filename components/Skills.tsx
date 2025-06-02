/* eslint-disable @next/next/no-img-element */
'use client'

import {motion, useInView} from 'framer-motion'
import { MySkills } from '@/data';
import { useEffect, useRef, useState } from 'react';

interface SkillProps {
  img: string;
  className: string;
  x: string;
  y: string;
}

const Skill: React.FC<SkillProps> = ({ img, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full cursor-pointer absolute'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1 }}
      viewport={{once:true}}
    >
      
      <img src={img} alt="Skill" className="w-8 h-9 custom-xs:w-5 custom-xs:h-5" />
    </motion.div>
  )
}

const skillSet = [
  {skill: 'SCO '},
  {skill: 'JavaScript'},
  {skill: 'ReactJS'},
  {skill: 'TailwindCSS'},
  { skill: 'Bootstrap' },
  {skill: 'MySql'},
  { skill: 'NodeJs'},
  { skill: "expressJS"},
  { skill: "APIs"},
  { skill: "Redux"}

  
]

const Skills = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const positions = [
    const [positions, setPositions] = useState<{ x: string; y: string }[]>([])

    useEffect(() => {
      const updatePositions = () => {
        if (window.innerWidth < 768) {
          // Mobile positions
          setPositions([
            { x: '-19vw', y: '-8vw' }, //MaterialUi 1
          { x: '30vw', y: '-10vw' }, //javascript 2
          { x: '20vw', y: '11vw' }, //reactjs 3
          { x: '4vw', y: '18vw' }, //postman 4
          { x: '-23vw', y: '-20vw' }, //springboot 5
          { x: '15vw', y: '-11vw' }, //MySql  6
          { x: '-0vw', y: '-10vw' }, //Docker 7
          { x: '0vw', y: '-25vw' }, //github 8
          { x: '-28vw', y: '10vw' }, //intellij 9
          { x: '-13vw', y: '10vw' }, //tailwindcss
          { x: '25vw', y: '3vw' }, //AWS 11
          { x: '36vw', y: '8vw' }, //Mangodb 12
          { x: '-10vw', y: '0vw' }, //html 13
          { x: '11vw', y: '2vw' }, //Nextjs 14
          { x: '-12vw', y: '20vw' }, //Sass
          { x: '-35vw', y: '-3vw' }, //Redis 16
          { x: '20vw', y: '-20vw' }, //css-3
          ])
        } else {
          // Large screen positions
          setPositions([
            { x: '-10vw', y: '-4vw' }, //MaterialUi 1
            { x: '18vw', y: '-5vw' }, //javascript 2
            { x: '13vw', y: '11vw' }, //reactjs 3
            { x: '0vw', y: '13vw' }, //postman 4
            { x: '-15vw', y: '-10vw' }, //springboot 5
            { x: '8vw', y: '-5vw' }, //MySql 6
            { x: '-0vw', y: '-7vw' }, //Docker 7
            { x: '0vw', y: '-13vw' }, //github  8
            { x: '-10vw', y: '11vw' }, //intellij  9
            { x: '-10vw', y: '5vw' }, //tailwind 10
            { x: '10vw', y: '3vw' }, //AWS 11
            { x: '18vw', y: '4vw' }, //Mangodb 12
            { x: '-5vw', y: '0vw' }, //html 13
            { x: '5vw', y: '0vw' }, //Nextjs 14
            { x: '3vw', y: '7vw' }, //Sass 15
            { x: '10vw', y: '-10vw' }, //Redis 16
            { x: '-20vw', y: '0vw' }, //css 17
          ])
        }
      }
  
      // Set initial positions
      updatePositions()
  
      // Update positions on window resize
      window.addEventListener('resize', updatePositions)
      return () => window.removeEventListener('resize', updatePositions)
    }, [])
  return (
    <>
    <h2 className='heading mb-[25px]' id='Skills'>Skills</h2>
    <div className='flex custom-smx:flex-col items-center justify-evenly'>
    <div className='w-[50vw] h-[70vh] custom-xs:w-full custom-xs:h-[30vh] flex items-center justify-center'>
      <motion.div className='w-full custom-xs:w-screen custom-xs:h-[30vh] h-full flex items-center justify-center rounded-full cursor-pointer md:bg-circularDark'
      >
        {positions.length > 0 && MySkills.map(({ id, img, className}, index) => (
        <Skill 
            key={id} 
            img={img}
            className={className}
            x={positions[index % positions.length].x} 
            y={positions[index % positions.length].y}
          />
        ))}
        <img src="./web-developer.svg" className='w-10 h-10 custom-xs:w-6 custom-xs:h-6' alt="img" />
      </motion.div>
    </div>
    <div ref={ref} className='w-[40vw] custom-smx:w-full flex flex-wrap flex-row justify-center'>
        {isInView && skillSet.map((item, idx) =>(
           <motion.p
           key={idx}
           className="mr-[5px] mt-[5px] py-2 px-3 text-white-100 custom-smx:text-sm font-poppins opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] border border-white/[0.1]"
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: idx * 0.05, duration: 0.5 }}
          //  viewport={{ once: true }}
         >
           {item.skill}
         </motion.p>
        ))}
      </div>
    </div>
    </>
  )
}

export default Skills
