import React, { useEffect } from "react";
import useEducation from "@/context/educationContext";
import { informationByLevel } from "@/data";
import { EducationInfo } from "@/data/types";
import Image from "next/image"; // Import Image from Next.js

const Information = () => {
  const { educationLevel, setEducationLevel } = useEducation();

  const removeSpaces = (str: string) => {
    return str.replace(/\s+/g, "");
  };

  const addSpaces = (str: string): string => {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2");
  };

  useEffect(() => {
    setEducationLevel(removeSpaces(educationLevel));
  }, [educationLevel, setEducationLevel]);

  const selectedInfo: EducationInfo | undefined =
    informationByLevel[educationLevel] || undefined;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-72">
      {educationLevel ? (
        <>
          <h2 className="text-3xl font-bold flex-col flex justify-center items-center">
            <span className="block">For {addSpaces(educationLevel)}</span>
            <span className="block">Students</span>
          </h2>
          <div className="w-full flex justify-center items-center mt-4 flex-row gap-10 p-10 max-w-[1000px]">
            <div className="shadow-2xl shadow-zinc-700 rounded-xl text-sm p-8 flex flex-col gap-4 bg-zinc-900">
              <p className="font-medium">{selectedInfo?.info1}</p>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </p>
            </div>
            {selectedInfo?.firstimage && (
              <Image
                src={selectedInfo.firstimage.src}
                alt="First Image"
                width={300}
                height={300}
              />
            )}
          </div>
          <div className="w-3/4 mx-auto flex justify-center mt-4 items-center flex-row gap-10 px-10 max-w-[750px]">
            <div className="shadow-2xl shadow-zinc-700 rounded-xl text-sm p-8 flex bg-zinc-900 flex-col gap-4">
              <p className="font-medium">{selectedInfo?.info2}</p>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-4 flex-row gap-10 p-10 max-w-[1000px]">
            {selectedInfo?.secondimage && (
              <Image
                src={selectedInfo.secondimage.src}
                alt="First Image"
                width={300}
                height={300}
              />
            )}
            <div className="shadow-2xl shadow-zinc-700 rounded-xl text-sm p-8 flex bg-zinc-900 flex-col gap-4">
              <p className="font-medium">{selectedInfo?.info3}</p>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </p>
            </div>
          </div>
          <p>{selectedInfo?.joke}</p>
          {selectedInfo?.video && (
            <video controls>
              <source src={selectedInfo.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </>
      ) : (
        <p>No education level selected. Please select an education level.</p>
      )}
    </div>
  );
};

export default Information;
