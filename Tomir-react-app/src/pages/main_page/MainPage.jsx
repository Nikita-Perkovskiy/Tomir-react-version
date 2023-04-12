import React from "react";
import FonSlider from "../../components/FonSlider/FonSlider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionTitle from "../../components/LayoutElements/SectionTitle/SectionTitle";
import BaizeInformation from "../../components/BaizeInformation/BaizeInformation";
import AboutFirmBanner from "../../components/AboutFirmBanner/AboutFirmBanner";

const MainPage = () => {
  return (
    <>
      <Header />
      <FonSlider />
      <BaizeInformation />
      <AboutFirmBanner />
      <Footer />
    </>
  );
};

export default MainPage;
