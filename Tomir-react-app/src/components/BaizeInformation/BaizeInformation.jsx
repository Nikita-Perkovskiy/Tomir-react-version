import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../LayoutElements/SectionTitle/SectionTitle";
import ButtonComponent from "../LayoutElements/ButtonComponent/ButtonComponent";
import "./index.scss";

const BaizeInformation = () => {
  return (
    <>
      <section>
        <Container>
          <SectionTitle
            sectionTitlePosition={"left"}
            sectionTitleContent={"DLACZEGO MY?"}
          />
          <Row>
            <Col className="baize-information__col" sm={6}>
              <Row className="baize-information__container">
                <Container>
                  <h4 className="baize-information__title baize-information__right">
                    OD 2017
                  </h4>
                  <p className="baize-information__content baize-information__right">
                    roku jesteśmy na rynku
                  </p>
                </Container>
              </Row>
              <Row className="baize-information__container"></Row>
              <Row className="baize-information__container">
                <Container>
                  <h4 className="baize-information__title baize-information__right">
                    PONAD 200
                  </h4>
                  <p className="baize-information__content baize-information__right">
                    zadowolonych klientów
                  </p>
                </Container>
              </Row>
              <Row className="baize-information__container"></Row>
            </Col>
            <Col sm={6}>
              <Row className="baize-information__container"></Row>
              <Row className="baize-information__container">
                <Container>
                  <h4 className="baize-information__title baize-information__left">
                    1500
                  </h4>
                  <p className="baize-information__content baize-information__left">
                    osób po naszych szkoleniach uzyskało uprawnienia na
                    operatora UDT
                  </p>
                </Container>
              </Row>
              <Row className="baize-information__container"></Row>
              <Row className="baize-information__container">
                <Container>
                  <h4 className="baize-information__title baize-information__left">
                    1300
                  </h4>
                </Container>
              </Row>
            </Col>
          </Row>
          <Container className="baize-information__container">
            <ButtonComponent
              buttonPath={"./"}
              buttonText={" Zapytaj o szczegóły"}
            />
          </Container>
        </Container>
      </section>
    </>
  );
};

export default BaizeInformation;
