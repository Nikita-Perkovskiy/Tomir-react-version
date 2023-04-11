import React from "react";
import FonSlider from "../../components/FonSlider/FonSlider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionTitle from "../../components/LayoutElements/SectionTitle/SectionTitle";
import BaseInformation from "../../components/BaseInformation/BaseInformation";

const MainPage = () => {
  return (
    <>
      <Header />
      <FonSlider />
      <BaseInformation />
      <Footer />
    </>
  );
};

export default MainPage;
