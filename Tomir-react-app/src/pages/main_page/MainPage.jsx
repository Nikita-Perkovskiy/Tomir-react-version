import React from "react";
import FonSlider from "../../components/FonSlider/FonSlider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BaizeInformation from "../../components/BaizeInformation/BaizeInformation";
import AboutFirmBanner from "../../components/AboutFirmBanner/AboutFirmBanner";
import QuestionAccordion from "../../components/QuestionAccordion/QuestionAccordion";

const MainPage = () => {
  return (
    <>
      <Header />
      <FonSlider />
      <BaizeInformation />
      <AboutFirmBanner />
      <QuestionAccordion />
      <Footer />
    </>
  );
};

export default MainPage;
