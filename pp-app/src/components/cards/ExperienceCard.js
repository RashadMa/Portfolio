import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <div>
      <div className="w-full h-[0.1px] border-div"></div>
      <div className="w-full justify-between flex p-4">
        <div className="basis-1/2 gap-1 flex flex-col">
          <div className="lg:text-2xl font-normal">{experience?.company}</div>
          <h1 className="lg:text-base font-light">{experience?.role}</h1>
          <a className="hover:underline max-w-max" href={experience?.website} target="new">see website</a>
        </div>
        <div className="basis-1/2 flex flex-col items-end justify-center">
          <div className="lg:text-base font-light">{experience?.date}</div>
          <div>{experience?.location}</div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
