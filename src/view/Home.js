import React from "react";
import About from "../components/About/About";
import Skills from "../components/Skills";

export const Home = () => {
  return (
    <article aria-label="sobre mim">
      <About />
      <Skills />
    </article>
  );
};

export default Home;
