import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import './Home.css'
function Home(){
    return (
        <>
        <div className="screen">
            {/* <div className="page-line">
                <div className="line"><h1>Where every flavor tells a story.</h1></div>
            </div> */}
            <div className="imae">
                <img src="https://sukhis.com/app/uploads/2022/04/image3-4.jpg"></img>
            </div>
        </div>
       <div className="cuisine">
        <h2 className="cuisine-heading">Cuisine</h2>
        <div className="cuisine-container" >
            <Link className="abc" to='/indian'><div className="cuisine-box"><img className="img" src="https://www.archanaskitchen.com/media/k2/items/cache/a801120ba3c46aa176f1cba39cc4c41e_XL.jpg"></img>
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
            
        </div>
       </div>

       <div className="popular">
        <h2 className="popular-heading">Popular Recipes</h2>
        <div className="popular-container">
            <div className="popular-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="popular-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="popular-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="popular-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="popular-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="popular-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="popular-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="popular-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            {/* <div className="popular-box"></div>
            <div className="popular-box"></div>
            <div className="popular-box"></div>
            <div className="popular-box"></div> */}
        </div>
       </div>
       {/* <Footer/> */}
        </>
    )
}
export default Home;