import React from "react";
import "./sahipaneer.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";

export default function SahiPaneer() {
  const { id } = useParams();
  console.log(id);
  const [recipeData, setRecipeData] = useState([]);
  useEffect(() => console.log(recipeData), [recipeData]);

  
  useEffect(() => {
    fetch(`http://localhost:2000/home/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(data);
      });
  }, [id]);

  return (
    <>
      <div className="sahipaneer-container">
        <div className="sahipaneer-video">
          <iframe
            src={recipeData.video}
            title={recipeData.name}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="sahipaneer-discription">
          <div className="sahipaneer-name">
            <h1>{recipeData.name}</h1>
          </div>
          <div className="sahipaneer-abc">
            <div className="like">
              <FcLike />
              like
            </div>
            {/* <div className="comment">Comment</div> */}
            {/* <div className="recipe">Recipe</div> */}
            {/* <div className="save">Save</div> */}
            <Link to='/save'><button className='btn'>Save</button></Link>
          </div>
        </div>
        <div className="ingredients">
          <h2>Ingredients</h2>
          <div className="Ingredients-list">
            <p>
              {/* {recipeData.ingredient} */}
            </p>
          </div>
        </div>
        <div className="recipe-page">
          <h2>Recipe</h2>
          <div className="method">
            <p>
              {recipeData.recipe}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
