import { useState } from "react";
import { Container } from "react-bootstrap";
import "./index.scss";
import CatalogCard from "../LayoutElements/CatalogCard/CatalogCard";
import SectionTitle from "../LayoutElements/SectionTitle/SectionTitle";
import PropTypes from "prop-types";

const cards = [
  <CatalogCard />,
  <CatalogCard />,
  <CatalogCard />,
  <CatalogCard />,
  <CatalogCard />,
  <CatalogCard />,
  <CatalogCard />,
  <CatalogCard />,
  <CatalogCard />,
  <CatalogCard />,
];

const CatalogSection = ({ catalogTile, catalogTitlePosition }) => {
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <Container>
      <SectionTitle
        sectionTitleContent={catalogTile}
        sectionTitlePosition={catalogTitlePosition}
      />
      <Container className="d-flex justify-content-start align-items-center flex-wrap">
        {cards.slice(0, 4).map((item, index) => (
          <div className="p-2 mb-5">
            {console.log("first4", index)}
            <CatalogCard key={index} />
          </div>
        ))}
      </Container>
      <Container className="d-flex justify-content-start align-items-center flex-wrap">
        {showAllCards &&
          cards.slice(4).map((item, index) => (
            <div className="p-2 mb-5">
              {console.log("after4", index)}
              <CatalogCard key={index} />
            </div>
          ))}
      </Container>
      <Container
        className="katalogSection__button"
        onClick={toggleShowAllCards}
      >
        {showAllCards ? "mniej" : "więcej"}
      </Container>
    </Container>
  );
};

CatalogSection.propTypes = {
  catalogTile: PropTypes.string.isRequired,
  catalogTitlePosition: PropTypes.string.isRequired,
};

export default CatalogSection;
