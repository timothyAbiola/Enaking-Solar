import React from 'react'
import profile from "../src/assets/profile.svg";

const Testimony = ({text, name}) => {
  return (
    <>
      <div className="card d-flex justify-content-around align-items-center card-c p-3 bg-dark">
        <div className="rounded-circle border border-dark p-4 bg-black">
          <img src={profile} alt="" className="card-img" />
        </div>
    <p className="text-center font3 text-light">{text}</p>
              <span className="text-center font2 text-light">{name}</span>
      </div>
    </>
  );
}

export default Testimony