import React from "react";
import { Link } from "react-router-dom";
import './french.css'
export default function French(){
    return (
        <>
        <div className="display-img">
            <img alt="" src="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg" hre></img>
        </div>
        <div className="type-of-recipe"><h1 className="type-of-recipe">French Food</h1></div>
        <div className="french-container" >
            <Link className="abc" to='/Common-bread'><div className="french-box"><img alt="" className="img" src="https://dreamsinparis.com/wp-content/uploads/2022/09/French-bread-types-1024x768.jpg"></img>
                <div className="french-names"><h2 className="french-name">Common bread</h2></div>
            </div></Link>

            <Link className="abc" to='Viennoiseries'><div className="french-box"><img alt=''className="img" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Pain_au_chocolat_Luc_Viatour.jpg"></img>
                <div className="french-names"><h2 className="french-name">Viennoiseries</h2></div>
            </div></Link>

            <Link className="abc" to='/desserts-and-pastries'><div className="french-box"><img className="img" src="https://i.insider.com/58a4b099fbaed522008b4625?width=700"></img>
                <div className="french-names"><h2 className="french-name">desserts and pastries</h2></div>
            </div></Link>

            <Link className="abc" to='/Lorraine'><div className="french-box"><img className="img" src="https://natashaskitchen.com/wp-content/uploads/2019/11/Classic-Quiche-Lorraine-Recipe-Beautiful-flaky-pastry-crust-is-paired-with-a-delicious-savory-egg-custard.-Perfect-for-breakfast-or-brunch.-1-4.jpg"></img>
                <div className="french-names"><h2 className="french-name">Lorraine</h2></div>
            </div></Link>

            <Link className="abc" to='/alsace'><div className="french-box"><img className="img" src="https://sometimeshome.com/wp-content/uploads/2018/01/sometimes_home-alsace_france-food_0007-e1518186115517.jpg"></img>
                <div className="french-names"><h2 className="french-name">Alsace</h2></div>
            </div></Link>

            <Link className="abc" to='/provence-alpes-côte d'><div className="french-box"><img className="img" src="https://www.bestcharmingbnb.com/gastronomy/provence-alpes-azur/grilled-vegetables-gastronomiy-provence-alpes-cote-d-azur.jpg"></img>
                <div className="french-names"><h2 className="french-name">provence-alpes-côte d'azur </h2></div>
            </div></Link>
            
            
        </div>
        </>
    )
}