import { Link } from "react-router-dom";
import"./AboutContentStyle.css";

import React from 'react';
import React1 from "../assets/react1.jpg";
import react2 from "../assets/react2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I </h1>
            <p>I am react font-end Developer. i create responsive secure website for my clients.</p>
            <Link to="/contact">
                <button className="btn ">Contact</button>
            </Link>
        </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={react2}
                        className="img"alt="true"/>   
                    </div>
                   

                  
                <div className="img-stack bottom">
                        <img src={React1}
                        className="img"alt="true"/>
                        </div>
                        </div>
        </div>
         </div>
  );
};

export default AboutContent;
