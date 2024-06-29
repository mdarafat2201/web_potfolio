import React from "react";
import Header from "../../HomeComponent/Header/Header";
import Banner from "../../HomeComponent/Banner/Banner";
import About from "../../HomeComponent/About/About";
import Services from "../../HomeComponent/Services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Banner/>
      <About/>
      <Services/>
    </>
  );
};

export default Home;
