import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from 'react'
// import { Button } from "bootstrap";
import React1 from "../assets/forza-horizon-5-bg.jpeg";
import React2 from "../assets/diablo-3-bg.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>who Am I</h1>
            <p>
            If your payment is not made before 3pm action would be taken that will affect your life style, family and your place of work your BVN will also be backlisted and the action would be more than what you are even owing
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default AboutContent
