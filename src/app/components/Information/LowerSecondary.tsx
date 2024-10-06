import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { exoplanetImages } from "@/data";
import Image from "next/image";
import IconTemplate from "./IconTemplate";
import { GridHoverEffect } from "./GridHoverEffect";

const LowerSecondary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === exoplanetImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const exoplanetTypes = [
    {
      content: (
        <div className="flex flex-col items-center p-10">
          <div className="text-xl font-bold">Gas Giants</div>
          <p className="text-lg font-medium mt-4 text-center">
            Gas giants are huge planets like Jupiter and Saturn. They are mostly
            made of gas and can be very hot, especially those close to their
            stars.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center p-10">
          <div className="text-xl font-bold">Terrestrial Planets</div>
          <p className="text-lg font-medium mt-4 text-center">
            Terrestrial planets are smaller, rocky planets like Earth. They can
            have water and may even have air for us to breathe!
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center p-10">
          <div className="text-xl font-bold">Ice Giants</div>
          <p className="text-lg font-medium mt-4 text-center">
            Ice giants are similar to Neptune and Uranus. They are cold and have
            thick atmospheres made of gases like hydrogen and helium.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center p-10">
          <div className="text-xl font-bold">Super-Earths</div>
          <p className="text-lg font-medium mt-4 text-center">
            Super-Earths are bigger than Earth but not as big as Neptune. They
            are usually rocky and might have air and water.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold flex-col flex justify-center items-center">
        <span className="block">For Lower</span>
        <span className="block">Secondary Students</span>
      </h2>
      <div className="w-full h-auto mt-72 flex justify-center items-center relative">
        {exoplanetImages.map((exoplanet, index) => (
          <motion.div
            key={index}
            className="absolute z-50 flex flex-col justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: currentIndex === index ? 1 : 0,
              scale: currentIndex === index ? 1 : 0.9,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={exoplanet.image}
              alt={exoplanet.name}
              className="h-[250px] w-auto shadow-xl rounded-xl shadow-zinc-800 object-cover object-center"
            />
            <div className="text-center flex-col flex justify-center items-center">
              <span className="mt-6 text-xl font-medium">{exoplanet.name}</span>
              <div className="mt-6 flex flex-col justify-center gap-2">
                <p className="text-lg font-medium">Stats:</p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between flex-row">
                    <span className="font-medium pr-10">Radius: </span>
                    <span>{exoplanet.lower_secondary_stats.radius}</span>
                  </div>
                  <div className="flex justify-between flex-row">
                    <span className="font-medium pr-10">Orbital Period: </span>
                    <span>
                      {exoplanet.lower_secondary_stats.orbital_period}
                    </span>
                  </div>
                  <div className="flex justify-between flex-row">
                    <span className="font-medium pr-10">Planet Type: </span>
                    <span>{exoplanet.lower_secondary_stats.planet_type}</span>
                  </div>
                  <div className="flex justify-between flex-row">
                    <span className="font-medium pr-10">
                      Discovery Method:{" "}
                    </span>
                    <span>
                      {exoplanet.lower_secondary_stats.discovery_method}
                    </span>
                  </div>
                  <div className="flex justify-between flex-row">
                    <span className="font-medium pr-10">Mass: </span>
                    <span>{exoplanet.lower_secondary_stats.mass}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="relative border-white bg-zinc-950 p-10 m-10 flex flex-col justify-center items-center gap-4 mt-80">
        <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        <div className="text-2xl font-bold text-center">
          What is an exoplanet?
        </div>
        <p className="text-lg font-medium text-center max-w-[800px]">
          Planets that orbit around other stars outside our solar system, often
          varying greatly in size, composition, and distance from their stars.
        </p>
      </div>

      <div className="flex justify-center items-center w-full h-auto px-24 flex-col gap-2">
        <div className="flex flex-row gap-4 justify-center items-center">
          <div className="text-3xl font-extrabold text-center">
            Types of exoplanets
          </div>
        </div>

        <GridHoverEffect
          items={exoplanetTypes.map((type) => ({
            content: type.content,
          }))}
        />
      </div>
    </div>
  );
};

export default LowerSecondary;
