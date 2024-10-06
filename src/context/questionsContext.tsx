import { createContext, useContext, useState } from "react";

interface QuestionsContextType {
  correctAnswers: number; // or string if you want to store them differently
  setCorrectAnswers: (count: number) => void; // Adjust type if necessary
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(
  undefined,
);

export const QuestionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0); // Initialize with 0 or any default value

  return (
    <QuestionsContext.Provider value={{ correctAnswers, setCorrectAnswers }}>
      {children}
    </QuestionsContext.Provider>
  );
};

const useQuestions = (): QuestionsContextType => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error("useQuestions must be used within a QuestionsProvider");
  }
  return context;
};

export default useQuestions;
