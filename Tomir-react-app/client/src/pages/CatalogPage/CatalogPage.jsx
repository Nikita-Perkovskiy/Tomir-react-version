import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CatalogSection from "../../components/CatalogSection/CatalogSection";
import "./index.scss";

const CatalogPage = () => {
  return (
    <>
      <Header />
      <section className="catalogSection-wrapper">
        <CatalogSection catalogTitlePosition={"left"} />
      </section>
      <Footer />
    </>
  );
};

export default CatalogPage;
