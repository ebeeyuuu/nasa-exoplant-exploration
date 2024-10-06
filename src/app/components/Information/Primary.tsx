import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { exoplanetImages } from "@/data";
import alien2 from "@/images/alien2.gif";
import alien from "@/images/alien.gif";
import Image from "next/image";
import IconTemplate from "./IconTemplate";
import { GridHoverEffect } from "./GridHoverEffect";

const Primary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === exoplanetImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const exoplanetTypes = [
    {
      content: (
        <div className="flex flex-col items-center p-10">
          <div className="text-xl font-bold">Gas Giants</div>
          <p className="text-lg font-medium mt-4 text-center">
            These planets are as large as Jupiter or Saturn and can be even
            larger. Some of them, like Hot Jupiters, orbit very close to their
            stars, with temperatures soaring into the thousands of degrees.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center p-10">
          <div className="text-xl font-bold">Terrestrial Planets</div>
          <p className="text-lg font-medium mt-4 text-center">
            Terrestrial planets are Earth-sized or smaller and are made of rock,
            water, or carbon. Some of them may have atmospheres and oceans.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center p-10">
          <div className="text-xl font-bold">Ice Giants</div>
          <p className="text-lg font-medium mt-4 text-center">
            Similar to Neptune or Uranus, these planets have hydrogen-helium
            atmospheres and rocky cores. They also include mini-Neptunes.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center p-10">
          <div className="text-xl font-bold">Super-Earths</div>
          <p className="text-lg font-medium mt-4 text-center">
            Super-Earths are planets more massive than Earth but lighter than
            Neptune. They are typically rocky and may or may not have
            atmospheres.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold flex-col flex justify-center items-center">
        <span className="block">For Primary</span>
        <span className="block">Students</span>
      </h2>

      <div className="w-full h-auto mt-56 flex justify-center items-center relative">
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
              <span className="mt-4 text-base text-center px-6">
                {exoplanet.primary_description}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative border-white bg-zinc-950 p-10 m-10 flex flex-col justify-center items-center gap-4 mt-60">
        <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        <div className="text-2xl font-bold text-center">
          What is an exoplanet?
        </div>
        <p className="text-lg font-medium text-center">
          Planets that orbit around other stars are called exoplanets.
        </p>
      </div>

      <div className="flex justify-center items-center w-full h-auto px-24 flex-col gap-2">
        <div className="flex flex-row gap-4 justify-center items-center">
          <Image src={alien} alt="alien" width={200} height={200} />
          <div className="text-3xl font-extrabold text-center">
            Types of exoplanets
          </div>
          <Image src={alien2} alt="alien2" width={200} height={200} />
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

export default Primary;
