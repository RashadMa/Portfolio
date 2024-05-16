import React from "react";
import ExperienceCard from "../cards/ExperienceCard";
import { education, experiences } from "../../data/constants";
import EducationCard from "../cards/EducationCard";

const Experience = () => {
  return (
    <section className="white-bg md:sticky md:top-0" id="experience">
      <div className="container p-4 sm:p-0 mx-auto">
        <div className="sticky top-0 white-bg block inter 2xl:text-[120px] xl:text-8xl lg:text-7xl md:text-5xl text-4xl font-normal tracking-tighter pt-12 black-tx">
          <div className="mt-4">
            Background
          </div>
          <div>
            <div className="w-full h-[0.1px] border-div"></div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col pb-10">
          <div className="basis-1/4">
            <div className="w-full h-[0.1px] border-div mb-4"></div>
            <p className="black-tx lg:text-3xl font-normal">experience</p>
          </div>
          <div className="basis-3/4 items-center pl-3">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="basis-1/4">
            <div className="w-full h-[0.1px] border-div mb-4"></div>
            <p className="black-tx lg:text-3xl font-normal">education</p>
          </div>
          <div className="basis-3/4 items-center pl-3 mb-5">
            {education.map((education, index) => (
              <EducationCard key={index} education={education} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
