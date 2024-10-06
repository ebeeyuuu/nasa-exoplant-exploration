import React from "react";
import useEducation from "@/context/educationContext";
import Image from "next/image";
import earth from "@/images/earth.png";

const Hero = () => {
  const { setEducationLevel } = useEducation();

  return (
    <div className="flex relative flex-col w-full h-full justify-center items-center">
      <div className="text-4xl md:text-5xl lg:text-6xl text-center flex justify-center items-center flex-col font-extrabold mt-32 md:mt-40 lg:mt-52">
        <span className="block">Exploring</span>
        <span className="block">Exoplanets!</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-0 h-auto mt-12 w-full px-5 lg:px-0 max-w-[1000px] max-lg:gap-y-12">
        <div className="flex justify-center items-center flex-col gap-y-4 md:gap-y-6 border-r-2 border-zinc-600 max-lg:border-r-0">
          <div className="text-lg md:text-xl font-bold text-center">
            <span className="block">Primary</span>
            <span className="block">Students</span>
          </div>
          <div className="flex justify-center items-center text-base md:text-lg font-medium">
            What you&apos;ll learn:
          </div>
          <div>
            <ul className="text-sm md:text-base text-center">
              <li>1. What are exoplanets?</li>
              <li>2. What are the types of exoplanets?</li>
              <li>3. How are exoplanets discovered?</li>
            </ul>
          </div>
          <button
            className="bg-black border-2 border-zinc-500 hover:scale-105 scale-100 smooth-animation rounded-xl px-5 py-3 text-sm font-medium"
            onClick={() => setEducationLevel("Primary")}
          >
            See material
          </button>
        </div>

        <div className="flex justify-center items-center flex-col gap-y-4 md:gap-y-6 border-r-2 border-zinc-600 max-lg:border-r-0">
          <div className="text-lg md:text-xl font-bold text-center">
            <span className="block">Lower Secondary</span>
            <span className="block">Students</span>
          </div>
          <div className="flex justify-center items-center text-base md:text-lg font-medium">
            What you&apos;ll learn:
          </div>
          <div>
            <ul className="text-sm md:text-base text-center">
              <li>1. What are exoplanets?</li>
              <li>2. Types of exoplanets</li>
              <li>3. Finding exoplanets</li>
              <li>4. Characterising exoplanets</li>
            </ul>
          </div>
          <button
            className="bg-black border-2 border-zinc-500 hover:scale-105 scale-100 smooth-animation rounded-xl px-5 py-3 text-sm font-medium"
            onClick={() => setEducationLevel("Lower Secondary")}
          >
            See material
          </button>
        </div>

        <div className="flex justify-center items-center flex-col gap-y-4 md:gap-y-6 mt-6">
          <div className="text-lg md:text-xl font-bold text-center">
            <span className="block">Upper Secondary</span>
            <span className="block">Students</span>
          </div>
          <div className="flex justify-center items-center text-base md:text-lg font-medium">
            What you&apos;ll learn:
          </div>
          <div>
            <ul className="text-sm md:text-base text-center">
              <li>1. What are exoplanets?</li>
              <li>2. Types of exoplanets?</li>
              <li>3. Find exoplanets</li>
              <li>4. Characterising exoplants</li>
              <li>5. NASA&apos;s Exoplanet Exploration</li>
            </ul>
          </div>
          <button
            className="bg-black border-2 border-zinc-500 hover:scale-105 scale-100 smooth-animation rounded-xl px-5 py-3 text-sm font-medium"
            onClick={() => setEducationLevel("Upper Secondary")}
          >
            See material
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full h-full relative">
        <div className="bg-gradient-to-b from-transparent to-black h-[300px] absolute top-0 -z-1">
          {" "}
        </div>
        <Image
          src={earth}
          alt="earth"
          className="w-[100vw] h-auto object-cover absolute max-md:top-[-50px] top-0 left-0 -z-[5]"
        />
      </div>
    </div>
  );
};

export default Hero;
