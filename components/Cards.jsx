import React from "react";


const Cards = ({ text, spant,cardImg }) => {
  return (
    <>
      <div className="card d-flex justify-content-around align-items-center card-c p-3">
        <img src={cardImg} alt="" className="card-img" />
        <p className="text-center font2">{text}</p>
        <span className="text-center font1">{spant}</span>
      </div>
    </>
  );
};

export default Cards;
