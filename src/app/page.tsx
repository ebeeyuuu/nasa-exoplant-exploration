"use client";

import React, { Suspense } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Information from "./components/Information";
import { EducationProvider } from "@/context/educationContext";

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <EducationProvider>
        <Hero />
        <Information />
      </EducationProvider>
    </Suspense>
  );
};

export default Home;
