import { createContext, useContext, useState } from "react";

interface EducationContextType {
  educationLevel: string;
  setEducationLevel: (level: string) => void;
}

const EducationContext = createContext<EducationContextType | undefined>(
  undefined,
);

export const EducationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [educationLevel, setEducationLevel] = useState<string>("primary");

  return (
    <EducationContext.Provider value={{ educationLevel, setEducationLevel }}>
      {children}
    </EducationContext.Provider>
  );
};

// Hook to use the EducationContext
const useEducation = (): EducationContextType => {
  const context = useContext(EducationContext);
  if (!context) {
    throw new Error("useEducation must be used within an EducationProvider");
  }
  return context;
};

export default useEducation;
