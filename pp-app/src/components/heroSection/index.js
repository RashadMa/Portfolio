import React from "react";
import { Bio } from "../../data/constants.js";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Hero = () => {
  return (
    <section className="min-h-screen md:sticky md:top-0" id="hero">
      <div className="container mx-auto flex justify-center">
        <div className="md:relative flex justify-between w-full max-w-screen-lg flex-col lg:flex-row">
          <div className="md:fixed w-full lg:order-1 order-2">
            <h1 className="white-tx flex sm:text-start text-center inter text-4xl font-light mt-52 sm:mt-96">
              Hi, I am <br />
              {Bio.name}
            </h1>
            <a href="#skills" className="sm:justify-start justify-center white-tx mt-5 flex underline">more about me</a>
            <div className="flex items-center justify-center sm:justify-normal white-tx">
              <p className="white-tx">find me on</p>
              <a className="inline-block mx-2 my-0 text-2xl	white-tx" rel="noreferrer" href={Bio.linkedin} target="_blank"><LinkedInIcon /></a>
              <a className="inline-block mx-2 my-0 text-2xl	white-tx" rel="noreferrer" href={Bio.github} target="_blank"><GitHubIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
