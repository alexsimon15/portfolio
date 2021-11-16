import React from "react";
import data from "../data";
import SingleProject from "./SingleProject";

function Projects() {
  return (
    <section className='projects' id='projects'>
      <div className='max-width'>
        <h2 className='title'>My projects</h2>
        <div className='project'>
          {data.map((project, index) => (
            <SingleProject index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
