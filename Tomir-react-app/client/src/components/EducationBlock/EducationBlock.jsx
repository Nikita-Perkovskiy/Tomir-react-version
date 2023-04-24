import { Container, Image, Row, Col } from "react-bootstrap";
import SectionTitle from "../LayoutElements/SectionTitle/SectionTitle";
import EducationBlockFon from "./images/education-block-fon.png";
import "./index.scss";

const EducationBlock = () => {
  return (
    <>
      <SectionTitle
        sectionTitleContent="SZKOLENIE"
        sectionTitlePosition={"right"}
      />
      <div className="educationBlock__wrapper">
        <Image
          src={EducationBlockFon}
          style={{ height: "525px", width: "100%", objectFit: "cover" }}
          alt="about firm fon picture"
          fluid
        />
        <Container className="educationBlock__content-wrapper">
          <h5 className="educationBlock__content mt-2 mb-2">
            Oferujemy szkolenia operatorów. Szkolenie zakończone egzaminem UDT
          </h5>
        </Container>
      </div>
      <Container className="mt-5 mb-5">
        <Row className="pt-3 pb-3">
          <h4 className="educationBlock__title">
            Oferujemy szkolenia operatorów na :
          </h4>
        </Row>
        <Row className="mt-4 mb-4">
          <Col xs={1} className="m-auto">
            <Container className="educationBlock__circule"></Container>
          </Col>
          <Col xs={11}>
            <p className="educationBlock__text">
              Wózki widłowe (wszystkie rodzaje : paleciak elektryczny, wózek
              widłowy czołowy, wózek widłowy boczny, wózek specjalizowany –
              kabina operatora podnoszona wraz z ładunkiem).
            </p>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col xs={1} className="m-auto">
            <Container className="educationBlock__circule"></Container>
          </Col>
          <Col xs={11}>
            <p className="educationBlock__text">
              Wózków widłowych ze zmiennym wysięgiem (ładowarki teleskopowe
              "MANITOU").
            </p>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col xs={1} className="m-auto">
            <Container className="educationBlock__circule"></Container>
          </Col>
          <Col xs={11}>
            <p className="educationBlock__text">
              Podesty ruchome: przejezdne, wolnobieżne, przewoźne, samojezdne
              montowane na pojeździe (nożycowe, koszowe).
            </p>
          </Col>
        </Row>
        <Row className="mt-4 pt-5">
          <p className="educationBlock__footer-text">
            Szkolenie zakończone egzaminem UDT. Szkolimy również obcokrajowców.
            Szkolenia są organizowane po wcześniejszym ustaleniu terminu i grupy
            uczestników. Przy grupach zorganizowanych możemy zaproponować
            korzystne rabaty. Szkolenie możemy przeprowadzić na terenie całego
            kraju, po wcześniejszym ustaleniu.
          </p>
        </Row>
      </Container>
    </>
  );
};

export default EducationBlock;
