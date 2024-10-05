"use client";

import React, { Suspense } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import BackgroundBeams from "./components/Hero/BackgroundBeams";
import Information from "./components/Information";
import { EducationProvider } from "@/context/educationContext";

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <EducationProvider>
        <div className="w-full h-full scrollbar-hide">
          <BackgroundBeams className="absolute top-0 -z-10" />
          <Hero />
          <Information />
        </div>
      </EducationProvider>
    </Suspense>
  );
};

export default Home;
