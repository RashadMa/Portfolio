import React from "react";
import { Bio, skills } from "../../data/constants";

const Skills = () => {
  return (
    <section className="white-bg md:min-h-[200vh] md:sticky md:top-0" id="skills">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap">
          <div className="text-center md:text-start 2xl:pr-10 p-3 lg:basis-8/12 basis-full mt-36">
            <h2 className="lg:text-5xl black-tx md:text-4xl text-3xl xl:font-medium ">
              {Bio.aboutHeader}
            </h2>
            <div className="flex flex-row flex-wrap 2xl:mt-96	lg:mt-64 md:mt-32 mt-16">
              <p className="lg:basis-1/4 basis-full black-tx text-xs mb-5">
                about me
              </p>
              <p className="lg:basis-3/4 basis-full black-tx text-base font-light">
                {Bio.aboutSummary}
              </p>
            </div>
          </div>

          <div className="lg:basis-4/12 basis-full mt-40">
            <div className="w-full flex flex-wrap gap-8 justify-center">
              {skills.map((skill) => (
                <div className="w-full max-w-lg border-[0.1px] border-black rounded-2xl px-4 py-9 m-3" key={skill.title}>
                  <div className="flex flex-wrap justify-center gap-3 mb-5">
                    {skill.skills.map((item, index) => (
                      <div className="md:text-base text-sm font-normal border-[0.1px] black-tx border-black rounded-lg md:px-4 px-3 md:py-3 py-2 flex items-center justify-center gap-2" key={index}>
                        <img alt="item-logo" className="brightness-95 w-6 h-6" src={item.image} />
                        <h1>
                          {item.name}
                        </h1>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Skills;
