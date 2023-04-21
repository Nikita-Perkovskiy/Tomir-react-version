import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CatalogSection from "../../components/CatalogSection/CatalogSection";

const CatalogPage = () => {
  return (
    <>
      <Header />
      <CatalogSection
        catalogTile={"Podnośniki nożycowe elektryczne:"}
        catalogTitlePosition={"left"}
      />
      <Footer />
    </>
  );
};

export default CatalogPage;
