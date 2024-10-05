import React, { useState, useRef } from "react";
import BackgroundBeams from "./Hero/BackgroundBeams";
import useEducation from "@/context/educationContext";
import LoadingButton from "./LoadingButton";
import Image from "next/image";
import earth from "@/images/earth.png";
import { motion } from "framer-motion";
import PopupMenu from "./PopupMenu";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex relative flex-col w-full h-full justify-center items-center">
      <BackgroundBeams className="absolute top-0 -z-10" />
      <div className="text-6xl text-center flex justify-center items-center flex-col font-extrabold mt-52">
        <span className="block">Exploring</span>
        <span className="block">Exoplanets!</span>
      </div>
      <div className="grid grid-cols-3 gap-0 h-[60vh] w-full">
        <div className="flex justify-center items-center flex-col gap-y-6">
          <div className="text-xl font-bold text-center scale-100 max-lg:scale-[80%] smooth-animation">
            Primary Students
          </div>
          <div className="flex justify-center items-center text-lg font-medium scale-100 max-lg:scale-[80%] smooth-animation">
            What you&apos;ll learn:
          </div>
          <div className="scale-100 max-lg:scale-[80%] smooth-animation">
            <ul>
              <li>1. What are exoplanets?</li>
              <li>2. What are the types of exoplanets?</li>
              <li>3. How are exoplanets discovered?</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-y-6">
          <div className="text-xl font-bold text-center scale-100 max-lg:scale-[80%] smooth-animation">
            Lower Secondary Students
          </div>
          <div className="flex justify-center items-center text-lg font-medium scale-100 max-lg:scale-[80%] smooth-animation">
            What you&apos;ll learn:
          </div>
          <div className="scale-100 max-lg:scale-[80%] smooth-animation">
            <ul>
              <li>1. What are exoplanets?</li>
              <li>2. Types of exoplanets</li>
              <li>3. Finding exoplanets</li>
              <li>4. Characterising exoplanets</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-y-6">
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
      <Image
        src={earth}
        alt="earth"
        className="w-full h-full object-cover absolute top-[30vh] -z-[5] mr-4"
      />
      <div className="relative z-20 mt-[-60px] flex justify-center items-center">
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-black border-white border text-white rounded-xl px-5 py-3 text-lg font-medium hover:scale-110 scale-100 smooth-animation mt-24"
        >
          See sources
        </button>
        <PopupMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          triggerRef={buttonRef}
        >
          <div className="flex flex-col gap-y-4 text-sm italic p-5">
            <p>
              &quot;Exoplanet Program: Exoplanet Program.&quot; Exoplanet
              Exploration: Planets Beyond Our Solar System,
              exoplanets.nasa.gov/exep.
            </p>
            <p>
              What Is an Exoplanet? | NASA Space Place – NASA Science for Kids.
              spaceplace.nasa.gov/all-about-exoplanets/en.
            </p>
            <p>Exoplanets - NASA Science. science.nasa.gov/exoplanets.</p>
          </div>
        </PopupMenu>
      </div>
    </div>
  );
};

export default Hero;
