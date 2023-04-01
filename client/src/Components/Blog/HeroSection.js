import React from 'react'
import {MdOutlineSearch} from 'react-icons/md';
import images from '../../constants/images'

const HeroSection = () => {
  return (
    <section className='mx-auto flex flex-col px-5 py-5 lg:flex-row '>
        {/* hero left side */}
      <div className='mt-10 lg:w-1/2'>
        <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:max-w-[540px]
        '>The most interesting fashion articles</h1>
        <p className='text-dark-light mt-4 text-center md:text-4xl lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt nesciunt nisi fugit voluptate. Quas, amet fugiat facilis, harum aperiam, odit quos nesciunt ab enim dolores officiis. Eligendi, animi consequuntur?
        </p>
        <div className='flex flex-col gap-y-2.5 mt-10 relative'>
            <div className='relative'>
                <MdOutlineSearch size={18} className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959ead]'/>
                <input type="text" className='placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959ead] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4' placeholder='Search article'/>
            </div>
            <button className='w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2 cursor-pointer'>Search</button>
        </div>
        {/* tags */}
        {/* c09621 */}
        <div className='flex flex-col mt-4 lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
            <span className='text-dark-light font-semibold italic'>Popular Tags:</span>
            <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3'>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Design</li> 
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Experience</li>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>User Interface</li>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Asho Ebi</li>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Fashion</li>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Nigeria</li>
            </ul>
        </div>
      </div>
      {/* hero right side */}
      <div className='hidden lg:block'>
        <img src={images.HeroImage} alt="users are reading articles"/>
      </div>
    </section>
  )
}

export default HeroSection
