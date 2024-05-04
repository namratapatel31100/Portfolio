import "./HeroImageStyle.css";

import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return(
     <div className="hero">
    <div className="mask">
        <img  className="into-img" src=
        {IntroImg} alt="IntroImg"/>

    </div>
    <div className="content">
        <p>Hi, I'M A NAMRATA PATEL.</p>
        <h1>Full Stack Developer</h1>
        <div>
            <Link to="/project"
            className="btn">project</Link>

<Link to="/contact"
            className="btn
            btn-light">contact</Link>

        </div>
    </div>
      
    </div>
  );
  
};

export default HeroImg;
