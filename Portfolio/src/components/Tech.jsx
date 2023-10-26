import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center shadow-section py-12 bg-hero-pattern-1 bg-no-repeat bg-cover'>
      <div className="hidden lg:flex w-[80%] flex-wrap justify-center gap-6">
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </div>
      <div className="w-[80%] flex lg:hidden flex-wrap justify-center gap-6">
      {technologies.map((technology) => (
        <div className='w-28 h-28 m-2' key={technology.name}>
          <img src={technology.icon} className="flex justify-center items-center w-full h-full p-2 shadow-lg rounded-[20px] bg-white" />
        </div>
      ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");