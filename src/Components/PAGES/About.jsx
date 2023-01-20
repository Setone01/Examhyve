import React from "react";
import Courses from "../COURSES/Courses";
import Features from "../FEATURES/Features";
import Footer from "../FOOTER/Footer";
import Hero from "../HERO/Hero";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Courses/>
      <Features/>
      <Footer/>
    </>
  );
};

export default Homepage;
