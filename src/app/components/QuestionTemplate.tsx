import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useQuestions from "@/context/questionsContext";

interface Option {
  text: string;
  isCorrect: boolean;
}

interface SlideProps {
  question: string;
  options: Option[];
  hint: string;
  onNextSlide: () => void;
}

const QuestionTemplate: React.FC<SlideProps> = ({
  question,
  options,
  hint,
  onNextSlide,
}) => {
  const { correctAnswers, setCorrectAnswers } = useQuestions();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    if (options[index].isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setTimeout(onNextSlide, 1000);
  };

  const handleShowHint = () => {
    setShowHint(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-6 text-center px-10 w-3/4 mx-auto">
        {question}
      </h2>

      <button
        onClick={handleShowHint}
        className="bg-blue-800 text-white rounded-lg px-[188px] py-5 mb-4 hover:scale-105 smooth-animation"
      >
        Show Hint
      </button>

      <AnimatePresence>
        {showHint && (
          <motion.div
            className="text-sm italic mb-6"
            initial={{ opacity: 0 }} // Initial state
            animate={{ opacity: 1 }} // Animation when it appears
            exit={{ opacity: 0 }} // Animation when it disappears
            transition={{ duration: 0.5 }} // Transition duration
          >
            {hint}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {options.map((option, index) => {
          const words = option.text.split(" ");
          const isTwoWords = words.length === 2;

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`flex ${isTwoWords ? "flex-col" : "flex-row"
                } justify-center items-center rounded-xl p-10 text-sm aspect-square text-white font-bold text-wrap hover:scale-105 smooth-animation ${selectedOption === null
                  ? "bg-gray-800"
                  : option.isCorrect
                    ? "bg-green-700"
                    : "bg-red-700"
                }`}
            >
              {isTwoWords
                ? words.map((word, i) => <span key={i}>{word}</span>)
                : option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionTemplate;
