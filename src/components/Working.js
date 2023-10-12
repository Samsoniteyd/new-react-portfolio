import "./WorkStyles.css";
import Work from "./Work";
import Workingcartdata from "./WorkingCartData";
import React from 'react';



const Working = () => {
return (
    <div className="work-container">
        <h1 className="project-heading">projects</h1>
        <div className="project-container">
        {Workingcartdata.map((val, ind) =>{
            return (
                <Work
                key={ind}
                imgsrc={val.imgsrc}
                title= {val.title}
                text= {val.text}
                view= {val.view}
                />
            )
        })}  
        </div>
    
    </div>
)
}

export default Working
