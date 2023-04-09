import React, { useState } from 'react'

const CommentForm = ({btnLabel, formSubmitHandler,initialText='', formCancleHandler=null}) => {
    const [commnetVal, setCommnetVal] = useState(initialText);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        formSubmitHandler(commnetVal);
        setCommnetVal('')
    }
    // formCancleHandler
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='flex flex-col items-end border border-primary rounded-lg p-4 bg-transparent'>
        <textarea 
        value={commnetVal} 
        onChange={(e) => setCommnetVal(e.target.value)}
        rows="5" 
        className='w-full focus:outline-none p-2' placeholder='Leave your comment here...' />
       
        <div className='flex items-center gap-x-2 pt-2'>
        {
          formCancleHandler && (
            <button 
            onClick={formCancleHandler}
            className='px-6 py-2.5 rounded-lg  text-red-500 border border-red-500 font-semibold cursor-pointer mt-2'>Cancel</button>
          )
        }
          <button type='submit' className='px-6 py-2.5 rounded-lg bg-primary text-white font-semibold cursor-pointer mt-2'>{btnLabel}</button>
        </div>
      </div>
    </form>
  )
}

export default CommentForm
