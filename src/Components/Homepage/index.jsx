import React from "react";
import Courses from "./HomeComponent/COURSES/Courses";
import Features from "./HomeComponent/FEATURES/Features";
// import Hero from "./HomeComponent/HERO/Hero";
import GettingStarted from "./HomeComponent/GettingStarted/index";

const index = () => {
  return (
    <>
//       <Hero />
      <Courses />
      <Features />
      <GettingStarted />
    </>
  );
};

export default index;
