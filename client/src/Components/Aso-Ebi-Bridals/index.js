import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

// const Box = styledComponents.div`

// `

const BridalsComponent = () => {
  return (
    <div className='box'>
      <div className='bridals-component-container'>
       <div className='in-cont'>
        <h2>Bridals and Aso Ebi</h2>
        <p>We've got beautiful and elegant designs cut out from the best of materials</p>
        <p> <a
            href="https://wa.me/+447470708848"
            // class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className='chat'>Chat</span>
          </a> with us now for a customised service for your Bridal and Aso Ebi wear</p>
       </div>
       <button className='btn bridals-btn'><Link to={'/bridals-asoebi'} style={{color: '#fff'}}>Shop Bridals & Aso Ebi</Link></button>
      
      </div>
      
    </div>
  )
}

export default BridalsComponent
