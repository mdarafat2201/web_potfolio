import React from "react";
import Header from "../../HomeComponent/Header/Header";
import Banner from "../../HomeComponent/Banner/Banner";
import About from "../../HomeComponent/About/About";
import Services from "../../HomeComponent/Services/Services";
import Skills from "../../HomeComponent/Skills/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <Banner/>
      <About/>
      <Services/>
      <Skills/>
    </>
  );
};

export default Home;
