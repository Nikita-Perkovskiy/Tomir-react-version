import React from "react";
import FonSlider from "../../components/FonSlider/FonSlider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BaizeInformation from "../../components/BaizeInformation/BaizeInformation";
import AboutFirmBanner from "../../components/AboutFirmBanner/AboutFirmBanner";
import QuestionAccordion from "../../components/QuestionAccordion/QuestionAccordion";
import "./index.scss";

const MainPage = () => {
  return (
    <>
      <body>
        <Header />
        <section>
          <FonSlider />
        </section>
        <section className="mainPage-section__wrapper">
          <BaizeInformation />
        </section>
        <section className="mainPage-section__wrapper">
          <AboutFirmBanner />
        </section>
        <section className="mainPage-section__wrapper">
          <QuestionAccordion />
        </section>
      </body>
      <Footer />
    </>
  );
};

export default MainPage;
