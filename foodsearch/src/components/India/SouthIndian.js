import React, { useEffect, useState } from "react";
import "./Vegetarian.css";
import { Link } from "react-router-dom";
export default function SouthIndian() {
  const [advice, setAdvice] = useState([]);

  const API=process.env.REACT_APP_KEY +'/home?foodtype=SouthIndian'
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data);
      })
      .catch((err) => {
        console.log(console.error);
      });
  }, []);
  console.log(advice);
  return (
    <>
      <div className="vegetarian">
        <div className="vegetarian-container">
          {advice.map((eac, index) => {
            return (
                <Link to={`/indian/${eac._id}`} className="abc">
                <div key={index} className="vegetarian-box">
                  <img className="img" src={eac.image} alt="image_" />
                  <div className="vegetarian-names">
                    <h2 className="vegetarian-name">{eac.name}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
          {/* <Link className="abc" to='/sahi-paneer'><div className="vegetarian-box"><img className="img" src="https://myfoodstory.com/wp-content/uploads/2022/04/Shahi-Paneer-1.jpg"></img>
                <div className="cusine-names"><h2 className="cusine-name">Indian</h2></div>
            </div></Link>
            <div className="vegetarian-box"><img src="https://myfoodstory.com/wp-content/uploads/2022/04/Shahi-Paneer-1.jpg" alt="a"></img></div>
            <div className="vegetarian-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="vegetarian-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="vegetarian-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="vegetarian-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="vegetarian-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="vegetarian-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
            <div className="vegetarian-box"><img src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg" alt="a"></img></div>
             */}
        </div>
      </div>
    </>
  );
}
