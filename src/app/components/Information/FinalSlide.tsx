import React from "react";
import useQuestions from "@/context/questionsContext";

const FinalSlide = () => {
  const { correctAnswers } = useQuestions();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-auto flex justify-center items-center relative">
        <div className="absolute z-50 flex flex-col justify-center items-center">
          <div className="text-center flex-col gap-6 flex justify-center items-center">
            <span className="mt-6 text-3xl font-extrabold">
              Congratulations!
            </span>
            <p className="text-lg font-medium">
              <span className="block text-xl font-medium">
                You have answered
              </span>
              <span className="block text-2xl font-extrabold">
                {correctAnswers}/5
              </span>
              <span className="block text-xl font-medium">
                questions correctly!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalSlide;
