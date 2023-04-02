import React from 'react'
import { Link } from 'react-router-dom'

const SugestedPost = ({className, header, posts = [], tags=[]}) => {
  return (
    <div className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}>
      <h2 className='font-roboto font-medium text-dark-hard md:text-xl'>{header}</h2>
      <div className='grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1'>
          {
            posts.map((item) => {
                return <div key={item._id} className="flex space-x-3 flex-nowrap items-center">
                    <img src={item.image} alt="laptop" className='aspect-square object-cover rounded-lg w-1/5'/>
                    <div className='text-sm font-roboto text-dark-hard font-medium'>
                        <h3 className='text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg'>{item.title}</h3>
                        <span className='text-xs opacity-50'>{new Date(item.createdAt).toLocaleDateString('en-us',
                        {
                            day: "numeric",
                        month: "short",
                        year: "numeric"
                        }
                        )}</span>
                    </div>
                </div>
            })
          }  
      </div>
      <h2 className='mt-8 font-roboto font-medium text-dark-hard md:text-xl'>Tags</h2>
      <div className='flex flex-wrap gap-x-2 gap-y-2 mt-4'>
        {
            tags.map((tag) => {
                return <Link to='#' className='inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm'>
                    {tag}
                </Link>
            })
        }
      </div>
    </div>
  )
}

export default SugestedPost
