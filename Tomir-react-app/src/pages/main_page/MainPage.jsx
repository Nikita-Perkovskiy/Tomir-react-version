import React from "react";
import Button from "../../components/Button/Button";
import FonSlider from "../../components/FonSlider/FonSlider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
//import { Route, Routes } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Header />
      <FonSlider />
      <Button text="hkbhk" path="/" />
      <Footer />
    </>
  );
};

export default MainPage;
