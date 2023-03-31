import React from "react";
import { Link } from "react-router-dom";
import './italian.css'
export default function Italian(){
    return (
        <>
        <div className="display-img">
            <img src="https://chefgourmetllc.com/wp-content/uploads/2020/07/Farfalle-scaled-e1596047259268-1980x990.jpg"></img>
        </div>
        <div className="type-of-recipe"><h1 className="type-of-recipe">Italian Food</h1></div>

        <div className="italian-container" >
            <Link className="abc" to='/italian-veg'><div className="italian-box"><img className="img" src="https://www.lagostina.it/cms/uploads/article/581x352-240.png"></img>
                <div className="italian-names"><h2 className="italian-name">soups and sauces</h2></div>
            </div></Link>

            <Link className="abc" to='/italian-nonveg'><div className="italian-box"><img className="img" src="https://www.theperfectloaf.com/wp-content/uploads/2023/02/theperfectloaf_pane_siciliano.jpg"></img>
                <div className="italian-names"><h2 className="italian-name">Bread</h2></div>
            </div></Link>

            <Link className="abc" to='/south-indian'><div className="italian-box"><img className="img" src="https://www.timeoutdubai.com/cloud/timeoutdubai/2022/04/18/Where-to-get-the-best-pizza-in-Dubai-2022.jpg"></img>
                <div className="italian-names"><h2 className="italian-name"> Pizzas</h2></div>
            </div></Link>

            <Link className="abc" to='/street-food'><div className="italian-box"><img className="img" src="https://theclevermeal.com/wp-content/uploads/2021/08/Italian-pasta-recipes_001-1.jpg"></img>
                <div className="italian-names"><h2 className="italian-name">Pasta </h2></div>
            </div></Link>

            <Link className="abc" to='/indian-sweet'><div className="italian-box"><img className="img" src="https://ciaoflorentina.com/wp-content/uploads/2022/03/Italian-Rice-1.jpeg"></img>
                <div className="italian-names"><h2 className="italian-name">Rice dishes</h2></div>
            </div></Link>

            <Link className="abc" to='/indian-sweet'><div className="italian-box"><img className="img" src="https://www.licious.in/blog/wp-content/uploads/2020/12/Italian-Fish.jpg"></img>
                <div className="italian-names"><h2 className="italian-name">Fish dishes</h2></div>
            </div></Link>

            <Link className="abc" to='/indian-sweet'><div className="italian-box"><img className="img" src="https://www.justalittlebitofbacon.com/wp-content/uploads/2017/10/beef-braised-in-barolo-1.jpg"></img>
                <div className="italian-names"><h2 className="italian-name">Meat dishes</h2></div>
            </div></Link>

            <Link className="abc" to='/indian-sweet'><div className="italian-box"><img className="img" src="https://www.shelovesbiscotti.com/wp-content/uploads/2018/08/Mediterranean-Roasted-Vegetables-3.jpg"></img>
                <div className="italian-names"><h2 className="italian-name">Vegetable dishes</h2></div>
            </div></Link>
            
        </div>
        </>
    )
}