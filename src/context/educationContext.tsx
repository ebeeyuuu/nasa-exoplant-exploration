import { useState, useEffect } from "react";

const EDUCATION_LEVEL_KEY = "educationlevel";

type EducationLevel = "Primary" | "Lower Secondary" | "Upper Secondary";

const useEducation = () => {
  const [educationLevel, setEducationLevel] = useState<EducationLevel | null>(
    null,
  );

  useEffect(() => {
    const storedEducationLevel = localStorage.getItem(
      EDUCATION_LEVEL_KEY,
    ) as EducationLevel | null;
    if (storedEducationLevel) {
      setEducationLevel(storedEducationLevel);
    }
  }, []);

  useEffect(() => {
    if (educationLevel) {
      localStorage.setItem(EDUCATION_LEVEL_KEY, educationLevel);
    }
  }, [educationLevel]);

  return { educationLevel, setEducationLevel };
};

export default useEducation;
