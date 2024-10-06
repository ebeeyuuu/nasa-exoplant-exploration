import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { exoplanetImages } from "@/data";
import alien2 from "@/images/alien2.gif";
import alien from "@/images/alien.gif";
import Image from "next/image";
import IconTemplate from "./IconTemplate";
import { GridHoverEffect } from "./GridHoverEffect";
import Accordion from "@/app/components/Accordion";
import SlidePresentation from "../SlidePresentation";
import QuestionTemplate from "../QuestionTemplate";
import { QuestionsProvider } from "@/context/questionsContext";
import FinalSlide from "./FinalSlide";

import Link from "next/link";

const Primary = () => {
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

  const accordionItems = [
    {
      title: "How do you know when the moon had enough to eat?",
      content: "When it's full.",
    },
  ];

  const questionsData = [
    {
      question: "What do exoplanets orbit?",
      options: [
        { text: "Stars that aren't the sun", isCorrect: true }, // Correct answer
        { text: "The sun", isCorrect: false },
        { text: "The moon", isCorrect: false },
        { text: "Neptune", isCorrect: false },
      ],
      hint: "Exoplanets are found outside our solar system.",
    },
    {
      question: "How many types of exoplanets are there?",
      options: [
        { text: "1", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "4", isCorrect: true }, // Correct answer
        { text: "8", isCorrect: false },
      ],
      hint: "Think about the categories astronomers use to classify them.",
    },
    {
      question: "What planet types were first found?",
      options: [
        { text: "Super earths", isCorrect: false },
        { text: "Non-human planets", isCorrect: false },
        { text: "Gas giants", isCorrect: true }, // Correct answer
        { text: "Terrestrial planets", isCorrect: false },
      ],
      hint: "Consider the characteristics of the planets that were discovered early.",
    },
    {
      question: "Which is the smallest type of exoplanet?",
      options: [
        { text: "Super earths", isCorrect: false },
        { text: "Terrestrial planets", isCorrect: true }, // Correct answer
        { text: "Neptunian planets", isCorrect: false },
        { text: "Gas giants", isCorrect: false },
      ],
      hint: "Think about the sizes of different exoplanet categories.",
    },
    {
      question: "Do mini-Neptunes exist in our solar system?",
      options: [
        { text: "Yes", isCorrect: false },
        { text: "I don't know", isCorrect: false },
        { text: "There used to be", isCorrect: false },
        { text: "No", isCorrect: true }, // Correct answer
      ],
      hint: "Consider the classifications of planets in our solar system.",
    },
  ];

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
          <div className="text-xl font-bold">Neptunian Planets</div>
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
    <QuestionsProvider>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold flex-col flex justify-center items-center mt-96">
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
                <span className="mt-6 text-xl font-medium">
                  {exoplanet.name}
                </span>
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

        <div className="flex justify-center items-center w-full h-auto px-10 max-w-[1000px] flex-col gap-2">
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
            color="#9cff9d"
          />
        </div>

        <div className="p-8 flex justify-center">
          <Accordion items={accordionItems} />
        </div>
        <Link
          href="https://drive.google.com/file/d/1gGlAXxYGadsWJCrdR1K-n7S9ogJvyaIX/view?usp=sharing"
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

export default Primary;
