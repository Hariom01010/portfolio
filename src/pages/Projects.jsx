import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { projects } from "../constants";

function Projects() {
  return (
    <div>
        <h1 className="my-5 text-center text-xl md:text-3xl text-[#cf9c0f]">SOME OF MY WORK</h1>

        <div className="flex flex-col items-center lg:flex-row">
            {projects.map((project)=>(
                <ProjectCard imgSrc={project.imgSrc} title={project.title} content={project.content} link={project.link}/>
            ))}
        </div>
    </div>
  );
}

export default Projects;
