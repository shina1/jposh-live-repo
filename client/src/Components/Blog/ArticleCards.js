import React from 'react'
import {BsCheck} from 'react-icons/bs';
import images from '../../constants/images'

const ArticleCards = ({className}) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
      <img src={images.Post1} alt="artilce" className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60'/>
      <div className='p-5'>
            <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>Future of work</h2>
            <p className='text-sm mt-3 text-dark md:text-lg'>Majority of peole will work in jobs that don’t exist today.</p>
            <div className='flex justify-between flex-nowrap items-center mt-6'>
                <div className='flex items-center gap-2 md:gap-2.5'>
                    <img src={images.User1} alt="profile" className='w-9 h-9 md:w-10 md:h-10'/>
                    <div className='flex flex-col'>
                       <h4 className='font-bold italic text-dark-soft text-sm md:text-base'>
                       Viola Manisa
                        </h4>
                        {/* bg-[#36B37E] */}
                        <div className='flex items-center  gap-2'>
                            <span className='bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full'><BsCheck size={15} className='text-[#36B37E]'/></span>
                            <span className='italic text-dark-light text-xs md:text-sm'>Author</span>
                            
                        </div>
                    </div>
                   
                </div>
                <span className='text-[#5A7184] italic font-bold text-sm md:text-base'>02 May</span>
            </div>
      </div>
    </div>
  )
}

export default ArticleCards
