import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam vel enim dapibus, sed tincidunt ipsum tristique. Sed vestibulum felis at arcu vehicula, sit amet placerat lectus fermentum. Vivamus at odio nec ante malesuada congue. </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                    <h3>COMPANY</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
            </div>
            <div className="footer-content-right">
                    <h3>GET IN TOUCH</h3>
                    <ul>
                        <li>+1-234-567-8900</li>
                        <li>contact@tomato.com</li>
                    </ul>
                    
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>

    </div>
  )
}

export default Footer