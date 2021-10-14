import React from "react";

import Introcarousel from "../components/IntroCarousel.js";

const style = {
  hero: {
    background: `url("./img/background.png")`
  }
};

const Introduction = () => {
  return (
    <div className="text-white" style={style.hero}>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="./img/profile.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Failed to load"
              width="448"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Hello, I'm Alex Yu: <br /> Software Developer
            </h1>
            <div className="h-100">
              <Introcarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
