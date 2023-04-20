// import { Container } from "react-bootstrap";
// import "./index.scss";

// const KatalogSection = () => {
//   return (
//     <>
//       <Container></Container>
//     </>
//   );
// };

// export default KatalogSection;

import { useState } from "react";
import { Container, Dropdown, Card, Button } from "react-bootstrap";
import "./index.scss";
import KatalogCard from "../LayoutElements/KatalogCard/KatalogCard";
import SectionTitle from "../LayoutElements/SectionTitle/SectionTitle";

const cards = [
  <KatalogCard />,
  <KatalogCard />,
  <KatalogCard />,
  <KatalogCard />,
  <KatalogCard />,
  <KatalogCard />,
  <KatalogCard />,
  <KatalogCard />,
  <KatalogCard />,
  <KatalogCard />,
];

const KatalogSection = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <Container>
      <SectionTitle
        sectionTitleContent={"Podnośniki nożycowe elektryczne:"}
        sectionTitlePosition={"left"}
      />
      <Container className="d-flex justify-content-around align-items-center flex-wrap">
        {cards.slice(0, 4).map((item) => (
          <div className="p-2 mb-5">
            <KatalogCard />
          </div>
        ))}
      </Container>
      <Container
        className="katalogSection__button"
        onClick={toggleShowAllCards}
      >
        Więcej
      </Container>
      <Container>
        {" "}
        {showAllCards &&
          cards.slice(0, 4).map((item) => (
            <div className="p-2 mb-5">
              <KatalogCard />
            </div>
          ))}
      </Container>
    </Container>
  );
};

export default KatalogSection;
