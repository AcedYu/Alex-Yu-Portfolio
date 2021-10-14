import React from "react";
import ProjectCard from "./ProjectCard.js";
import projects from "../utils/projects.json";

const ProjectList = () => {

  return (
    <div>
      {
        projects.map(project => (
          <ProjectCard
            title={project.title}
            link={project.link}
            image={project.image}
            logo={project.logo}
          />
        ))
      }
    </div>
  )
}

export default ProjectList;