
import "./FooterStyles.css";

import React from 'react';
import { FaHome,FaPhone, FaMailBulk ,FaGithub ,FaTwitter ,FaLinkedin  } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left"> 
                <div className="location">
                    <FaHome size={20} style={{color:"white",marginRight:"2rem"}} />
                    <div>
                        <p>123 Shriram colany, </p>
                        <p> Nandurbar.</p>

                    </div>
                </div>
                <div className="phone">
                    <h4>
                <FaPhone size={20} style={{color:"white",marginRight:"2rem"}} />
                9921120014</h4>

                     </div>

                     <div className="email">
                    <h4>
                <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}} />
              namrata3112000@gmail.com </h4>
                
                     </div>
            </div>

            <div className="right">
                <h4> About the company</h4>
                <p> This is me Namrata Patel. I enjoy discussing
                    new project and  design challenges.</p>
                    <div className="social">
                    <FaGithub size={30} style={{color:"white",marginRight:"1rem"}} />   

                    <FaTwitter size={20} style={{color:"white",marginRight:"2rem"}} />

                    <FaLinkedin size={20} style={{color:"white",marginRight:"2rem"}} />
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
