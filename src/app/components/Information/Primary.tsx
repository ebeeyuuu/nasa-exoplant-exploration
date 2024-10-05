import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { exoplanetImages } from "@/data";
import alien2 from "@/images/alien2.gif";
import alien from "@/images/alien.gif";
import Image from "next/image";

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

      <div className="relative bg-zinc-950 rounded-xl p-10 m-10 flex flex-col justify-center items-center gap-4 mt-60">
        <div className="text-2xl font-bold text-center">
          What is an exoplanet?
        </div>
        <p className="text-lg font-medium text-center">
          Planets that orbit around other stars are called exoplanets.
        </p>
      </div>

      <div className="flex justify-center items-center w-full h-auto m-10 flex-col gap-12">
        <div className="flex flex-row gap-4 justify-center items-center">
          <Image src={alien} alt="alien" width={200} height={200} />
          <div className="text-3xl font-extrabold text-center">
            Types of exoplanets
          </div>
          <Image src={alien2} alt="alien2" width={200} height={200} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-10 max-w-[1000px]">
          {[
            "Gas giants",
            "Terrestrial planets",
            "Ice giants",
            "Super-Earths",
          ].map((type, index) => (
            <div
              key={index}
              className="relative bg-zinc-950 hover:bg-[#0a2b02] border border-zinc-900 hover:border-transparent rounded-xl p-14 flex flex-col justify-center hover:scale-105 scale-100 items-center gap-4 overflow-hidden group smooth-animation delay-1000"
            >
              <div className="relative z-10 text-center flex flex-col justify-center items-center">
                <div className="text-xl font-bold text-center">{type}</div>
                <p className="text-lg font-medium text-center mt-4">
                  {type === "Gas Giants"
                    ? "These planets are as large as Jupiter or Saturn and can be even larger. Some of them, like Hot Jupiters, orbit very close to their stars, with temperatures soaring into the thousands of degrees."
                    : type === "Neptunian Planets"
                      ? "Similar to Neptune or Uranus, these planets have hydrogen-helium atmospheres and rocky cores. They also include mini-Neptunes, which are smaller than Neptune but larger than Earth."
                      : type === "Super-Earths"
                        ? "Super-Earths are planets more massive than Earth but lighter than Neptune. They are typically rocky and may or may not have atmospheres."
                        : "Terrestrial planets are Earth-sized or smaller and are made of rock, water, or carbon. Some of them may have atmospheres and oceans."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Primary;
