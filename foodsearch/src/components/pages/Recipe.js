import React from "react";
import { Link } from "react-router-dom";
import { Cuisine } from "../Data/cuisine";
export default function Resipe(){
    // console.log(Cuisine[0]);
    return (
        <>
        <div className="display-img">
            <img src="http://res.cloudinary.com/the-infatuation/image/upload/v1671473548/Screen_Shot_2022-12-19_at_10.11.56_AM_jdwh8u.png"></img>
        </div>
        <div className="type-of-recipe"><h1 className="type-of-recipe">Cuisine</h1></div>
        <div className="cuisine-container" >
            {
                Cuisine.map((xyz,index)=>{
                return(
                    <Link key={index} className="abc" to={xyz.Path}><div className="cuisine-box">
                        <img className="img" src={xyz.image}/>
                        <div className="cusine-names"><h2 className="cusine-name">{xyz.Country}</h2></div>
                    </div></Link>
                )
                })
            }

            {/* <Link className="abc" to='/indian'><div className="cuisine-box"><img className="img" src="https://www.archanaskitchen.com/media/k2/items/cache/a801120ba3c46aa176f1cba39cc4c41e_XL.jpg"></img>
                <div className="cusine-names"><h2 className="cusine-name">Indian</h2></div>
            </div></Link>

            <Link className="abc" to='/korean'><div className="cuisine-box"><img className="img" src="https://travelfoodatlas.com/wp-content/uploads/2020/09/Bibimbap.jpg.webp"></img>
                <div className="cusine-names"><h2 className="cusine-name">korean</h2></div>
            </div></Link>

            <Link className="abc" to='/italian'><div className="cuisine-box"><img className="img" src="https://theplanetd.com/images/Traditional-Italian-Food.jpg"></img>
                <div className="cusine-names"><h2 className="cusine-name">Italian</h2></div>
            </div></Link>

            <Link className="abc" to='/french'><div className="cuisine-box"><img className="img" src="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2019/02/Food-in-French.png?resize=640%2C360"></img>
                <div className="cusine-names"><h2 className="cusine-name">French</h2></div>
            </div></Link>
             */}
        </div>
        </>
    )
}