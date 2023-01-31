import React from "react";
import Comment from "../PAGES/Comment/comment" 
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
      <Comment />
      <Footer/>
    </>
  );
};

export default Homepage;
