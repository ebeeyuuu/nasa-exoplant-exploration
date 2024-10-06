import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { exoplanetImages } from "@/data";
import Image from "next/image";
import IconTemplate from "./IconTemplate";
import { GridHoverEffect } from "./GridHoverEffect";
import SlidePresentation from "../SlidePresentation";
import QuestionTemplate from "../QuestionTemplate";
import { QuestionsProvider } from "@/context/questionsContext";
import FinalSlide from "./FinalSlide";

const UpperSecondary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === exoplanetImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const questionsData = [
    {
      question: "What is the primary goal of the Kepler Space Telescope?",
      options: [
        { text: "To study dark matter", isCorrect: false },
        { text: "To discover exoplanets", isCorrect: true }, // Correct answer
        { text: "To map the cosmic microwave background", isCorrect: false },
        { text: "To observe black holes", isCorrect: false },
      ],
      hint: "This telescope focused on identifying planets outside our solar system by observing their transits.",
    },
    {
      question:
        "Which method involves measuring the gravitational pull of a star by observing the orbits of its planets?",
      options: [
        { text: "Astrometry", isCorrect: true }, // Correct answer
        { text: "Transit method", isCorrect: false },
        { text: "Spectroscopy", isCorrect: false },
        { text: "Direct imaging", isCorrect: false },
      ],
      hint: "This method calculates the slight wobbles in a star's position due to gravitational forces exerted by its planets.",
    },
    {
      question: "What does the term 'Goldilocks zone' refer to?",
      options: [
        {
          text: "The area around a star where conditions are just right for liquid water to exist",
          isCorrect: true,
        }, // Correct answer
        {
          text: "The zone where asteroids are most abundant",
          isCorrect: false,
        },
        {
          text: "The region in a galaxy with the highest density of stars",
          isCorrect: false,
        },
        {
          text: "The boundary around a black hole from which nothing can escape",
          isCorrect: false,
        },
      ],
      hint: "This zone is crucial in determining whether a planet could support life as we know it.",
    },
    {
      question: "What is the significance of studying exoplanet atmospheres?",
      options: [
        { text: "To understand the star's composition", isCorrect: false },
        { text: "To find potential signs of life", isCorrect: true }, // Correct answer
        { text: "To measure the planet's temperature", isCorrect: false },
        { text: "To determine the planet's age", isCorrect: false },
      ],
      hint: "Atmospheric analysis can reveal the presence of gases that may indicate biological activity.",
    },
    {
      question:
        "Which exoplanet is known for having the potential to host life due to its Earth-like conditions?",
      options: [
        { text: "Proxima Centauri b", isCorrect: true }, // Correct answer
        { text: "HD 209458 b", isCorrect: false },
        { text: "WASP-17b", isCorrect: false },
        { text: "Kepler-186f", isCorrect: false },
      ],
      hint: "This exoplanet orbits the closest star to our solar system and is located in the habitable zone.",
    },
  ];

  const exoplanetTypes = [
    {
      content: (
        <div className="flex flex-col items-center p-10">
          <div className="text-xl font-bold">Gas Giants</div>
          <p className="text-lg font-medium mt-4 text-center">
            Gas giants are planets the size of Saturn or Jupiter, the largest
            planet in our solar system, or much, much larger. More variety is
            hidden within these broad categories. Hot Jupiters, for instance,
            were among the first planet types found – gas giants orbiting so
            closely to their stars that their temperatures soar into the
            thousands of degrees (Fahrenheit or Celsius).
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center p-10">
          <div className="text-xl font-bold">Terrestrial Planets</div>
          <p className="text-lg font-medium mt-4 text-center">
            Terrestrial planets are Earth sized and smaller, composed of rock,
            silicate, water or carbon. Further investigation will determine
            whether some of them possess atmospheres, oceans or other signs of
            habitability.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center p-10">
          <div className="text-xl font-bold">Neptunian Planets</div>
          <p className="text-lg font-medium mt-4 text-center">
            Neptunian planets are similar in size to:Buiffer: Neptune or Uranus
            in our solar system. They likely have a mixture of interior
            compositions, but all will have hydrogen and helium-dominated outer
            atmospheres and rocky cores. We’re also discovering mini-Neptunes,
            planets smaller than Neptune and bigger than Earth. No planets of
            this size or type exist in our solar system.
          </p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center p-10">
          <div className="text-xl font-bold">Super-Earths</div>
          <p className="text-lg font-medium mt-4 text-center">
            Super-Earths are typically terrestrial planets that may or may not
            have atmospheres. They are more massive than Earth, but lighter than
            Neptune.
          </p>
        </div>
      ),
    },
  ];

  return (
    <QuestionsProvider>
      <div className=" flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold flex-col flex justify-center items-center mt-96">
          <span className="block">For Upper</span>
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
                <span className="mt-6 text-xl font-medium">
                  {exoplanet.name}
                </span>
                <div className="flex flex-col gap-2 w-full justify-center">
                  <p className="text-lg font-medium mt-4 w-full flex justify-center items-center">
                    Stats:
                  </p>
                  <div className="mt-6 flex flex-row gap-6 justify-center">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between flex-row">
                        <span className="font-medium pr-10">Radius:</span>
                        <span>{exoplanet.upper_secondary_stats.radius}</span>
                      </div>
                      <div className="flex justify-between flex-row">
                        <span className="font-medium pr-10">
                          Orbital Period:
                        </span>
                        <span>
                          {exoplanet.upper_secondary_stats.orbital_period}
                        </span>
                      </div>
                      <div className="flex justify-between flex-row">
                        <span className="font-medium pr-10">Planet Type:</span>
                        <span>
                          {exoplanet.upper_secondary_stats.planet_type}
                        </span>
                      </div>
                      <div className="flex justify-between flex-row">
                        <span className="font-medium pr-10">
                          Discovery Method:
                        </span>
                        <span>
                          {exoplanet.upper_secondary_stats.discovery_method}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between flex-row">
                        <span className="font-medium pr-10">
                          Discovery Year:
                        </span>
                        <span>
                          {exoplanet.upper_secondary_stats.discovery_year}
                        </span>
                      </div>
                      <div className="flex justify-between flex-row">
                        <span className="font-medium pr-10">Mass:</span>
                        <span>{exoplanet.upper_secondary_stats.mass}</span>
                      </div>
                      <div className="flex justify-between flex-row">
                        <span className="font-medium pr-10">Temperature:</span>
                        <span>
                          {exoplanet.upper_secondary_stats.orbital_radius}
                        </span>
                      </div>
                      <div className="flex justify-between flex-row">
                        <span className="font-medium pr-10">Eccentricity:</span>
                        <span>
                          {exoplanet.upper_secondary_stats.eccentricity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-72 w-full h-auto px-10 flex-col gap-2 max-w-[1000px]">
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="text-3xl font-extrabold text-center">
              Types of exoplanets
            </div>
          </div>
          <GridHoverEffect
            items={exoplanetTypes.map((type) => ({
              content: type.content,
            }))}
            color="#2740e3"
          />
        </div>
        <div className="w-full h-[100vh] flex justify-center items-center mt-32 max-w-[3000px]">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 p-10 h-[100vh]">
            <div className="relative flex p-10  flex-col gap-2 justify-center items-center bg-[#101010] row-span-2 col-span-3">
              <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
              <div className="flex flex-col justify-center">
                <h3 className="text-left mb-4 text-xl font-bold">
                  Current and Future Missions
                </h3>
                <ul>
                  <li>
                    <strong>Kepler Space Telescope:</strong> Instrumental in
                    discovering thousands of exoplanets.
                  </li>
                  <li>
                    <strong>James Webb Space Telescope (JWST):</strong> Will
                    provide detailed observations of exoplanet atmospheres.
                  </li>
                  <li>
                    <strong>Future Missions:</strong> Planning additional
                    missions to further explore exoplanets.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative flex p-10  flex-col gap-2 justify-center items-center bg-[#101010] row-span-2 col-span-1">
              <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
              <div className="text-base font-medium">
                In the year 2000, the Hubble began studying the exoplanet HD 209458 b, the first extrasolar planet known to make ‘transits’ across the face of its star. Hubble became the first telescope to directly detect an exoplanet’s atmosphere and survey its make up. 
              </div>
            </div>

            <div className="relative flex p-10  flex-col gap-2 justify-center items-center bg-[#101010] row-span-2 col-span-2">
              <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
              <div className="flex flex-col justify-center">
                <h3 className="text-left mb-4 text-xl font-bold">
                  Finding exoplanets
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>Astrometry</div>
                  <div>Imaging</div>
                  <div>Radial Velocity</div>
                  <div>Transit</div>
                  <div>Transit timing variations</div>
                  <div>Eclipse timing variations</div>
                  <div>Microlensing</div>
                  <div>Pulsar timing variations</div>
                  <div>Pulsation timing variations</div>
                  <div>Orbital brightness modulations</div>
                  <div>Disk Kinematics</div>
                </div>
              </div>
            </div>

            <div className="relative flex p-10  flex-col gap-2 justify-center items-center bg-[#101010] row-span-3 col-span-3">
              <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
              <div className="flex flex-col justify-center">
                <h3 className="text-left mb-4 text-xl font-bold">
                  Characterizing exoplanets
                </h3>
                <p>
                  Once exoplanets are discovered, scientists work to understand
                  their properties:
                </p>
                <ul>
                  <li>
                    <strong>Size and Mass:</strong> Calculated using the transit
                    and radial velocity methods.
                  </li>
                  <li>
                    <strong>Atmospheric Composition:</strong> Analyzed through
                    transit spectroscopy.
                  </li>
                  <li>
                    <strong>Potential for Life:</strong> Researchers aim to find
                    signs of habitability.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative flex p-10  flex-col gap-2 justify-center items-center bg-[#101010] row-span-3 max-md:row-span-2 col-span-2">
              <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
              <div className="flex flex-col justify-center p-10">
                <h2 className="text-left mb-4 text-xl font-bold">
                  NASA Exoplanet Exploration Program
                </h2>
                <p>
                  The NASA Exoplanet Exploration Program (ExEP) is dedicated to
                  discovering and studying planets outside our Solar System.
                </p>
                <ul>
                  <li className="mt-4">
                    <strong>Discovery of Exoplanets:</strong> Focuses on
                    identifying new exoplanets and characterizing their
                    properties.
                  </li>
                  <li className="mt-2">
                    <strong>Characterization:</strong> Understanding
                    atmospheres, compositions, and potential habitability.
                  </li>
                  <li className="mt-2">
                    <strong>Search for Life:</strong> Identifying candidates
                    that could harbor life.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative flex p-10  flex-col gap-2 justify-center items-center bg-[#101010] row-span-3 max-md:row-span-2 col-span-1">
              <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
              <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
            </div>
          </div>
        </div>
        <Link
          href="https://drive.google.com/file/d/18UEN0P2BvumRINHMggM1Hu5_1YtQAIW_/view?usp=sharing"
          target="_blank"
          className="hover:text-blue-300 hover-scale-105 transition-all duration-300 ease-in-out text-white"
        >
          Watch a video here (mandatory)
        </Link>
        <div className="w-full flex justify-center items-center flex-col gap-6 h-[100vh] mt-32">
          <SlidePresentation
            numSlides={6}
            currentIndex={currentSlideIndex}
            setCurrentIndex={setCurrentSlideIndex}
          >
            <QuestionTemplate
              {...questionsData[0]}
              onNextSlide={() => setCurrentSlideIndex(1)}
            />
            <QuestionTemplate
              {...questionsData[1]}
              onNextSlide={() => setCurrentSlideIndex(2)}
            />
            <QuestionTemplate
              {...questionsData[2]}
              onNextSlide={() => setCurrentSlideIndex(3)}
            />
            <QuestionTemplate
              {...questionsData[3]}
              onNextSlide={() => setCurrentSlideIndex(4)}
            />
            <QuestionTemplate
              {...questionsData[4]}
              onNextSlide={() => setCurrentSlideIndex(5)}
            />
            <FinalSlide />
          </SlidePresentation>
        </div>
      </div>
    </QuestionsProvider>
  );
};

export default UpperSecondary;
