import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { exoplanetImages } from "@/data";
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

      <div className="w-full mt-56 flex justify-center items-center relative">
        {exoplanetImages.map((exoplanet, index) => (
          <motion.div
            key={index}
            className="absolute flex flex-col justify-center items-center"
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
              className="w-[300px] h-auto"
            />
            <span className="mt-4 text-lg font-medium">{exoplanet.name}</span>
            <span className="mt-2 text-sm text-center px-4">
              {exoplanet.description}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Primary;
