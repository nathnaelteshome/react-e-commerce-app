import React from 'react'
import { Facebook, Instagram, Twitter, Pinterest, Phone, Room, MailOutline } from '@mui/icons-material';
import './footer.scss'

export const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className="leftContainer">
                <h1 className="logo">NATHSTORE.</h1>
                <p className="decsription">The ultimate online destination for all your shopping needs. Whether you are looking for fashion, beauty, electronics, home decor, or anything in between, we have it all at unbeatable prices.</p>
                <div className="socialContainer">
                    <div className="socialIcon" style={{ backgroundColor: "#3B5999" }} ><Facebook fontSize='large' /></div>
                    <div className="socialIcon" style={{ backgroundColor: "#E4405F" }} ><Instagram fontSize='large' /></div>
                    <div className="socialIcon" style={{ backgroundColor: "#55ACEE" }} ><Twitter fontSize='large' /></div>
                    <div className="socialIcon" style={{ backgroundColor: "#E60023" }} ><Pinterest fontSize='large' /></div>
                </div>
            </div>

            <div className="centerContainer">
                <h3 className="title">Useful Links</h3>
                <ul className="list">
                    <li className='listItem'>Home</li>
                    <li className='listItem'>Cart</li>
                    <li className='listItem'>Man Fashion</li>
                    <li className='listItem'>Woman Fashion</li>
                    <li className='listItem'>Accessories</li>
                    <li className='listItem'>My Account</li>
                    <li className='listItem'>Order Tracking</li>
                    <li className='listItem'>Wishlist</li>
                    <li className='listItem'>Wishlist</li>
                    <li className='listItem'>Terms</li>
                </ul>
            </div>
            <div className="rightContainer">
                <h3 className="title">Contact</h3>
                <div className="contactItem"><Room style={{marginRight:"10px"}}/> Nath Building, Tesema Aba Kemaw St Addis Ababa</div>
                <div className="contactItem"><Phone style={{marginRight:"10px"}}/> +251 345 45 54</div>
                <div className="contactItem"><MailOutline style={{marginRight:"10px"}}/> contact@nath.dev</div>
                <img className="paymentImg" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
            </div>
        </div>
    )
}
