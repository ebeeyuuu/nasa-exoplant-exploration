import React, { useEffect } from "react";
import useEducation from "@/context/educationContext";

import Primary from "./Information/Primary";
import UpperSecondary from "./Information/UpperSecondary";
import LowerSecondary from "./Information/LowerSecondary";

const Information = () => {
  const { educationLevel, setEducationLevel } = useEducation();

  useEffect(() => {
    setEducationLevel(educationLevel);
  }, [educationLevel, setEducationLevel]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-80 relative">
      {educationLevel === "Primary" && <Primary />}
      {educationLevel === "Upper Secondary" && <UpperSecondary />}
      {educationLevel === "Lower Secondary" && <LowerSecondary />}

      {!educationLevel && (
        <p>Click on the &apos;see material&apos; button to start learning!</p>
      )}
    </div>
  );
};

export default Information;
