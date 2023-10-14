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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque aliquid sit tenetur culpa praesentium expedita, inventore eum illo mollitia exercitationem, magnam a amet accusamus nulla veniam, fugit animi iste architecto quia placeat quos ex facilis. Placeat doloribus aperiam commodi, vitae, pariatur reiciendis vel tenetur a numquam tempore temporibus nemo?
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
