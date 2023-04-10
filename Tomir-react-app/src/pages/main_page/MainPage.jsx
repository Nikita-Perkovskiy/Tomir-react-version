import React from "react";
import FonSlider from "../../components/FonSlider/FonSlider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionTitle from "../../components/LayoutElements/SectionTitle/SectionTitle";

const MainPage = () => {
  return (
    <>
      <Header />
      <FonSlider />
      <SectionTitle
        sectionTitlePosition={"right"}
        sectionTitleContent={"Wynajem"}
      />
      <Footer />
    </>
  );
};

export default MainPage;
