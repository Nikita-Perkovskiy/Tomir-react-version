import DetailsBlock from "../../components/DetailsBlock/DetailsBlock";
import EducationBlock from "../../components/EducationBlock/EducationBlock";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ServiceBlock from "../../components/ServiceBlock/ServiceBlock";
import SliderArendationBlock from "../../components/SliderArendationBlock/SliderArendationBlock";
import "./index.scss";

const ServicePage = () => {
  return (
    <>
      <Header />
      <section className="servicePage-section__wrapper">
        <SliderArendationBlock />
      </section>
      <section className="servicePage-section__wrapper">
        <DetailsBlock />
      </section>
      <section className="servicePage-section__wrapper">
        <EducationBlock />
      </section>
      <section className="servicePage-section__wrapper">
        <ServiceBlock />
      </section>
      <Footer />
    </>
  );
};

export default ServicePage;
