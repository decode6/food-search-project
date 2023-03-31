import React from "react";
import { Link } from "react-router-dom";
import './korean.css'
export default function Korean(){
    return (
        <>
        <div className="display-img">
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/181114130138-korean-food-2620014201204004k-jeonju-bibimbap.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280"></img>
        </div>
        <div className="type-of-recipe"><h1 className="type-of-recipe">Korean Food</h1></div>

        <div className="Korean-container" >
            <Link className="abc" to='/korean-veg'><div className="korean-box"><img className="img" src="https://preview.redd.it/yk97z1az1cx61.jpg?width=640&crop=smart&auto=webp&s=c57ff18c8d6af958ec366400e722c55799bc8eb3"></img>
                <div className="korean-names"><h2 className="indian-name">Vegetarian</h2></div>
            </div></Link>

            <Link className="abc" to='/korean-nonveg'><div className="korean-box"><img className="img" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/KOCIS_Korean_meal_table_%284553953910%29.jpg"></img>
                <div className="korean-names"><h2 className="korean-name">Non Vegetarian</h2></div>
            </div></Link>

            <Link className="abc" to='/korean-street-food'><div className="korean-box"><img className="img" src="https://whatnowdfw.com/wp-content/uploads/sites/12/2022/01/A-Korean-Street-Food-Eatery-is-Coming-Soon-to-Fort-Worth-1.jpg"></img>
                <div className="korean-names"><h2 className="korean-name">street Food</h2></div>
            </div></Link>

            <Link className="abc" to='/korean-sweet'><div className="korean-box"><img className="img" src="https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Assorted-Korean-Mochi-Cakes.png"></img>
                <div className="korean-names"><h2 className="korean-name">Korean Dessert</h2></div>
            </div></Link>
            
        </div>
        </>
    )
}