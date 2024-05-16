import React from "react";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <section className="black-bg md:sticky md:min-h-[150vh] md:top-0" id="projects">
      <div className="container p-4 sm:p-0 mx-auto">
        <div className="pt-24 pb-10 flex items-center">
          <p className="white-tx text-sm basis-1/12 font-normal">personal projects</p>
          <div className="basis-11/12 h-[0.1px] border-div"></div>
        </div>

        <div className="flex md:justify-between justify-center flex-wrap gap-11">
          {projects
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
