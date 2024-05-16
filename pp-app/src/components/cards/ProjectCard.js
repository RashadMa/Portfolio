import React from "react";

const ProjectCards = ({ project, setOpenModal }) => {
  const open = () => {
    setOpenModal({ state: true, project: project })

  }
  return (
    <div className="rounded brightness-75 hover:brightness-100 w-[350px] cursor-pointer flex flex-col gap-1 mb-5 ease-out duration-300 hover:scale-105 pb-2 bb drop-shadow-2xl" onClick={() => open()}>
      <img alt="/" className=" block w-full h-full object-center	object-cover rounded-md" src={project.image} />
      <div className="w-full flex flex-col gap-0 px-0 py-[2px]">
        <div className="text-lg font-medium white-tx overflow-hidden max-w-full">{project.title}</div>
      </div>
      <div className="w-full flex items-center flex-wrap gap-3 mt-1">
        {project.tags?.map((tag, index) => (
          <span className="text-xs font-light white-tx black-bg p-1 rounded-lg" key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
