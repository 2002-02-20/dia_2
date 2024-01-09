import React from "react";
import "./Cards.css";
const Cards = ({ titulo, info, img, alt }) => {
  return (
    <>
    <div className="container">
        <h3>{titulo}</h3>
        <p>{info}</p>
        <div className="imgInfo">
        <img src={img} alt={alt} />
        </div>
        </div>
    </>
  );
};

export default Cards;
