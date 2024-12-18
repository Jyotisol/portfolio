import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'
// import OtherSkills from './OtherSkills'

const Achivements = () => {
  return (
    <>
    <div id='Achivements'>
    <h1 className='heading pb-10'>
        My <span className='text-purple'>
        Approach
        </span>
    </h1>
    <div className='flex flex-col items-center'>
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
        <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='fast'
        />
        </div>
        
    </div>
    </div>
    </>
  )
}

export default Achivements