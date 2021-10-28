import React from "react";
import ExpCard from "./ExpCard.js";
import experience from "../utils/experience.json";

const ExpereinceList = () => {
  return (
    <div>
      {experience.map((job) => (
        <ExpCard
          company={job.company}
          logo={job.logo}
          title={job.title}
          date={job.date}
          location={job.location}
          tasks={job.tasks}
        />
      ))}
    </div>
  );
};

export default ExpereinceList;
