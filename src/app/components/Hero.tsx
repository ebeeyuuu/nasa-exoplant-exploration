import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="text-6xl text-center flex justify-center items-center flex-col font-extrabold mt-52">
        <span className="block">Exploring</span>
        <span className="block">Exoplanets!</span>
      </div>
      <div className="grid grid-cols-3 gap-0 h-[100vh] w-full">
        <div className="bg-gradient-to-b from-black via-[#272727] to-black flex justify-center items-center flex-col gap-y-6">
          <div className="text-xl font-bold text-center scale-100 max-lg:scale-[80%] smooth-animation">
            Primary Students
          </div>
          <div className="flex justify-center items-center text-lg font-medium scale-100 max-lg:scale-[80%] smooth-animation">
            What you&apos;ll learn:
          </div>
          <div className="scale-100 max-lg:scale-[80%] smooth-animation">
            <ul>
              <li>1. Something</li>
              <li>2. Something</li>
              <li>3. Something</li>
              <li>4. Something</li>
              <li>5. Something</li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-b from-black via-[#272727] to-black flex justify-center items-center flex-col gap-y-6">
          <div className="text-xl font-bold text-center scale-100 max-lg:scale-[80%] smooth-animation">
            Lower Secondary Students
          </div>
          <div className="flex justify-center items-center text-lg font-medium scale-100 max-lg:scale-[80%] smooth-animation">
            What you&apos;ll learn:
          </div>
          <div className="scale-100 max-lg:scale-[80%] smooth-animation">
            <ul>
              <li>1. Something</li>
              <li>2. Something</li>
              <li>3. Something</li>
              <li>4. Something</li>
              <li>5. Something</li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-b from-black via-[#272727] to-black flex justify-center items-center flex-col gap-y-6">
          <div className="text-xl font-bold text-center scale-100 max-lg:scale-[80%] smooth-animation">
            Upper Secondary Students
          </div>
          <div className="flex justify-center items-center text-lg font-medium scale-100 max-lg:scale-[80%] smooth-animation">
            What you&apos;ll learn:
          </div>
          <div className="scale-100 max-lg:scale-[80%] smooth-animation">
            <ul>
              <li>1. Something</li>
              <li>2. Something</li>
              <li>3. Something</li>
              <li>4. Something</li>
              <li>5. Something</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
