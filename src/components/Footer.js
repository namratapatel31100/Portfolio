
import "./FooterStyles.css";

import React from 'react';
import { FaHome,FaPhone, FaMailBulk ,FaFacebook ,FaTwitter ,FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left"> 
                <div className="location">
                    <FaHome size={20} style={{color:"white",marginRight:"2rem"}} />
                    <div>
                        <p>123 Housing Society. </p>
                        <p> Mumbai.</p>

                    </div>
                </div>
                <div className="phone">
                    <h4>
                <FaPhone size={20} style={{color:"white",marginRight:"2rem"}} />
                 +91 22-1234-5678</h4>

                     </div>

                     <div className="email">
                    <h4>
                <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}} />
               info@gmail.com </h4>
                
                     </div>
            </div>

            <div className="right">
                <h4> About the company</h4>
                <p> This is me Fahimul Kabir. CEO & 
                    founder of Tech2etc. I enjoy discussing
                    new project and  design challenges.</p>
                    <div className="social">
                    <FaFacebook size={30} style={{color:"white",marginRight:"1rem"}} />   

                    <FaTwitter size={20} style={{color:"white",marginRight:"2rem"}} />

                    <FaLinkedin size={20} style={{color:"white",marginRight:"2rem"}} />
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
