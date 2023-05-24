import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./index.scss";
import CatalogCard from "../LayoutElements/CatalogCard/CatalogCard";
import SectionTitle from "../LayoutElements/SectionTitle/SectionTitle";
import PropTypes from "prop-types";
import getData from "../../config/API";

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
  const [dataCards, setDataCards] = useState([]);

  useEffect(() => {
    getData().then((products) => {
      setDataCards(products);
    });
  }, []);

  console.log("dataCards", dataCards);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <Container>
      {dataCards.map((el) => (
        <>
          <SectionTitle
            sectionTitleContent={el.type.title}
            sectionTitlePosition={catalogTitlePosition}
          />
          <Container className="d-flex justify-content-start align-items-center flex-wrap">
            {el.cards.slice(0, 4).map((card) => (
              <div className="p-2 mb-5" key={card.id}>
                <CatalogCard
                  picture={card.picture}
                  alt={card.alt}
                  model={card.model}
                  drive_unit={card.drive_unit}
                  working_height={card.working_height}
                  weight={card.weight}
                  carrying={card.carrying}
                />
              </div>
            ))}
          </Container>
        </>
      ))}
      {/* <SectionTitle
        sectionTitleContent={catalogTile}
        sectionTitlePosition={catalogTitlePosition}
      />
      <Container className="d-flex justify-content-start align-items-center flex-wrap">
        {cards.slice(0, 4).map((item, index) => (
          <div className="p-2 mb-5">
            <CatalogCard />
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
      </Container> */}
    </Container>
  );
};

CatalogSection.propTypes = {
  catalogTile: PropTypes.string.isRequired,
  catalogTitlePosition: PropTypes.string.isRequired,
};

export default CatalogSection;
