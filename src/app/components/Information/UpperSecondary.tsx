import React from "react";
import IconTemplate from "./IconTemplate";

const UpperSecondary = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold flex-col flex justify-center items-center">
        <span className="block">For Upper</span>
        <span className="block">Secondary Students</span>
      </h2>
      <div className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-3 md:grid-cols-6 grid-rows-12 gap-4 max-md:gap-8 min-h-[150vh] w-[100vw] p-10">
          <div className="w-full h-full relative flex justify-center items-center bg-zinc-800 row-span-2 col-span-3">
            <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
            Hello world 1
          </div>
          <div className="w-full h-full relative flex justify-center items-center bg-zinc-800 row-span-2 col-span-1">
            <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
            Hello world 2
          </div>
          <div className="w-full h-full relative flex justify-center items-center bg-zinc-800 row-span-2 col-span-2">
            <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
            Hello world 3
          </div>
          <div className="w-full h-full relative flex justify-center items-center bg-zinc-800 row-span-3 col-span-3">
            <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
            Hello world 5
          </div>
          <div className="w-full h-full relative flex justify-center items-center bg-zinc-800 row-span-3 max-md:row-span-2 col-span-2">
            <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
            Hello world 4
          </div>
          <div className="w-full h-full relative flex justify-center items-center bg-zinc-800 row-span-3 max-md:row-span-2 col-span-1">
            <IconTemplate className="absolute h-6 w-6 -top-3 -left-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -bottom-3 -left-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -top-3 -right-3 text-zinc-400" />
            <IconTemplate className="absolute h-6 w-6 -bottom-3 -right-3 text-zinc-400" />
            Hello world 6
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperSecondary;
