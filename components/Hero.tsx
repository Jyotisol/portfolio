/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  
  return (
    <div className="pb-5 py-10">
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>
    <div className="flex custom-smx:flex-col flex-row custom-smx:justify-around items-center w-full relative custom-xs:mt-40 custom-sm:mt-40 custom-xsm:mt-40 mt-40 mb-10 z-10">
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <h2 className='font-poppins uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
        Driven Web Development Aficionado
        </h2>
        <TextGenerateEffect
        className='font-poppins text-center text-[40px] md:text-5xl'
        words="Transforming Concepts into Seamless User Experiences"
        />
        <p className="font-Dancing_Script text-center md:tracking-wider custom-sm:text-[1rem] md:text-lg lg:text-2xl mb-4">
            Hi I&apos;m <span className="text-orange-500 font-bold uppercase">Jyoti</span>, a Full Stack Developer.
        </p>
        <a href="#about">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow/>}
            position='right'
          />
        </a>
      </div>
      <div className='custom-md:my-10 custom-smx:mt-10'>
        <img src="/dp.photo.jpg" alt="photo" className=' w-[350px] h-[350px] custom-xs:w-[300px] custom-xs:h-[350] rounded-full'/>
      </div>
    </div>

    </div>
  )
}

export default Hero
