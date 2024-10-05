"use client";

import React, { Suspense } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
    </Suspense>
  );
};

export default Home;
