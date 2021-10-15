import React from "react";

const style = {
  title: {
    height: "auto",
    width: "auto",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    fontSize: "160%"
  },
  logo: {
    height: "15%",
    width: "auto",
    position: "absolute",
    bottom: "0px",
    right: "0px"
  }
};

const ProjectCard = ({ title, link, image, logo }) => {
  return (
    <div className="col mt-4">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="card bg-dark h-100">
          <img src={image} className="card-img" alt="Could not load properly" />
          <div className="card-img-overlay">
            <h1
              className="card-title text-white bg-secondary"
              style={style.title}
            >
              {title}
            </h1>
            <p className="card-text">
              <img src={logo} alt="Failed to load" style={style.logo} />
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
