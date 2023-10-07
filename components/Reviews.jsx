import React from "react";
import Testimony from "./Testimony";

const Reviews = () => {
  return (
    <div className="container mb-5">
      <h3 className="text-center my-5">Our Clients Reviews</h3>
      <div className="d-flex flex-wrap justify-content-center gap-5">
        <Testimony
          name="Faruq. O"
          text="ENAKING SOLAR TECH made it easy for me to switch to solar energy. The quality of their work is outstanding, and I'm lovin the lower enery bills. I appreciate their commitment to sustainable solutions"
        />
        <Testimony
          name="Samuel .K"
          text="I can't express how thrilled I am with the solar panel installation provided by ENAKING SOLAR TECH. Not only did they help me save on my eneryy bills, but they also made the entire process hassle-free."
        />
        <Testimony
          name="Esther .A"
          text="Choosing ENAKING SOLAR TECH for our electric fence installation was the right decision. They were prompt, efficient, and the quality of their work exceeded my expectations. I highly recommend their services."
        />
      </div>
    </div>
  );
};

export default Reviews;
