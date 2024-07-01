import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import './newsletter.scss'

export const Newsletter = () => {
  return (
    <div className='newsletterContainer' >
        <h1 className="newsletterTitle">Newsletter</h1>
        <div className="newsletterDesc">Get timely updates from your favorite products</div>
        <div className="inputContainer">
            <input type="text" placeholder='Your email' className="input" />
            <button className="inputButton"><SendIcon fontSize='large'/> </button>
        </div>
        </div>
  )
}
