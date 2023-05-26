import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./index.scss";
import CatalogCard from "../LayoutElements/CatalogCard/CatalogCard";
import SectionTitle from "../LayoutElements/SectionTitle/SectionTitle";
import PropTypes from "prop-types";
import getData from "../../config/API";
import LoaderComponent from "../LoaderComponent/LoaderComponent";

const CatalogSection = ({ catalogTitlePosition }) => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [dataCards, setDataCards] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    getData().then((products) => {
      setDataCards(products);
      setLoader(false);
    });
  }, []);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  return loader ? (
    <>
      <LoaderComponent />
    </>
  ) : (
    <Container>
      {dataCards.map((el) => (
        <div key={el.type.id}>
          <SectionTitle
            sectionTitleContent={el.type.title}
            sectionTitlePosition={catalogTitlePosition}
          />
          <Container className="d-flex justify-content-start align-items-center flex-wrap">
            {el.cards.slice(0, 4).map((card) => (
              <div key={card.id} className="p-2 mb-5">
                <CatalogCard
                  key={card.id}
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
          <Container className="d-flex justify-content-start align-items-center flex-wrap">
            {showAllCards &&
              el.cards.slice(4).map((card) => (
                <div key={card.id} className="p-2 mb-5">
                  <CatalogCard
                    key={card.index}
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
          <Container
            className="katalogSection__button"
            onClick={toggleShowAllCards}
          >
            {showAllCards ? "mniej" : "więcej"}
          </Container>
        </div>
      ))}
      <Container className="mt-5">
        <SectionTitle
          sectionTitleContent={"Wózki widłowe:"}
          sectionTitlePosition={catalogTitlePosition}
        />
        <p className="catalog-block__text-title pt-3 pb-3">
          Udźwig: 1 – 16 ton
        </p>
        <p className="catalog-block__text-title pt-3 pb-3">
          Zasilanie: elektryczne, LPG, diesel
        </p>
        <p className="catalog-block__text-title pt-3 pb-5">
          Wys. podnoszenia: wg potrzeb klienta
        </p>
      </Container>
    </Container>
  );
};

CatalogSection.propTypes = {
  catalogTitlePosition: PropTypes.string.isRequired,
};

export default CatalogSection;
