import React from "react";
import './Indian.css'
import { Link } from "react-router-dom";
import { India } from "../Data/Indian";
export default function Indian(){

    

    return (
        <>
        <div className="display-img">
            <img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content6553.jpg"></img>
        </div>
        <div className="indian-heading"><h1 className="type-of-recipe">Indian Food</h1></div>

        <div className="indian-container" >
            {
                 India.map((eac,index)=>{
                    return(
                        <Link key={index} className="abc" to={eac.iPath}><div className="indian-box">
                            <img  className="img" src={eac.iimage}/>
                            <div className="indian-names"><h2 className="indian-name">{eac.iname}</h2></div>
                        </div></Link>
                    )
                    })
            }
            
        </div>
        </>
    )
}