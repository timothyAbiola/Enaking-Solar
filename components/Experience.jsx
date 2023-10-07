import React from 'react'
import work from "../src/assets/experience-pic.jpg";

const Experience = () => {
  return (
    <>
      <div className="container-fluid ex-bg mt-5" id='exper'>
        <div className="row pb-5">
          <div className="col-md-6 d-flex pt-5">
            <img src={work} alt="" className="img-fluid solar-img mt-5" />
          </div>
          <div className="col-md-6 pt-5 mx-auto mb-5">
            <h3 className="my-5 text-center">Experience</h3>
            <div className="box d-flex flex-column gap-5 mt-4  mx-auto">
              <h2 className='text-center'>We provide you the best experience</h2>
              <span className='text-center'>
                Our commitment to your satisfaction is unwaverin, and we stand
                behind the quality of our services
              </span>
              <div className="btn btn-color mx-auto col-6" style={{ width: 150 }}>
                <span className="explore">Explore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience