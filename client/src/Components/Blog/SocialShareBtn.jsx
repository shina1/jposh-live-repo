import React from 'react'
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import {FaTwitterSquare, FaWhatsappSquare} from 'react-icons/fa'


const SocialShareBtn = ({url, title}) => {
  return (
    <div className='w-full flex justify-between'>
      <a href='/#' target='_blank' rel="noreferrer">
        <AiFillFacebook className='text-[#3b5998] w-12 h-auto'/>
      </a>
      <a href={`https://twitter.com/intent/tweet?url=${url}`} target='_blank' rel="noreferrer">
        <FaTwitterSquare className='text-[#00acee] w-12 h-auto'/>
      </a>
      <a href='/#' target='_blank' rel="noreferrer">
        <AiFillInstagram className='text-[#E1306C] w-12 h-auto'/>
      </a>
      <a href={`https://api.whatsapp.com/send/?text=${url}`} target='_blank' rel="noreferrer">
        <FaWhatsappSquare className='text-[#25d366] w-12 h-auto'/>
      </a>
    </div>
  )
}

export default SocialShareBtn
