import React from "react";
import Header from "./components/Header/Header";
import css from "./styles/app.module.scss"; 
import Hero from "./components/Hero/hero";
import Expertise from "./components/Expertise/expertise";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import People from "./components/people/People";

const App = () => {
  // Don't forget to add the font link in index.html
  return (
    <div className={` bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Expertise />
      <Works />
      <Portfolio />
      <People />
      <Footer />
    </div>
  );
};

export default App;