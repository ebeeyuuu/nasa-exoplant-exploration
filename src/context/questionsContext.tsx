import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import useEducation from "./educationContext";

interface QuestionsContextType {
  correctAnswers: number;
  setCorrectAnswers: (count: number) => void;
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(
  undefined,
);

export const QuestionsProvider = ({ children }: { children: ReactNode }) => {
  const { educationLevel } = useEducation();
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  useEffect(() => {
    setCorrectAnswers(0);
  }, [educationLevel]); // Trigger this effect whenever educationLevel changes

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
