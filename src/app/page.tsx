"use client";

import React, { Suspense } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import BackgroundBeams from "./components/Hero/BackgroundBeams";
import Information from "./components/Information";
import { EducationProvider } from "@/context/educationContext";

const Home = () => {
  return (
    <Suspense
      fallback={<Loader primaryColorHex="#6a2bcf" accentColorHex="#00b8b8" />}
    >
      <EducationProvider>
        <div className="w-full h-full scrollbar-hide">
          <BackgroundBeams className="absolute top-0 -z-10 h-[100vh] max-sm:h-[50vh] w-full" />
          <Hero />
          <Information />
        </div>
      </EducationProvider>
    </Suspense>
  );
};

export default Home;
