import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../../components/LayoutElements/SectionTitle/SectionTitle";
import ButtonComponent from "../../components/LayoutElements/ButtonComponent/ButtonComponent";
import "./index.scss";

const BaseInformation = () => {
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
              <Row className="pt-5 pb-5">
                <Container>
                  <h4 className="baize-information__title baize-information__right">
                    OD 2017
                  </h4>
                  <p className="baize-information__content baize-information__right">
                    roku jesteśmy na rynku
                  </p>
                </Container>
              </Row>
              <Row className="pt-5 mpb-5"></Row>
              <Row className="pt-5 pb-5">
                <Container>
                  <h4 className="baize-information__title baize-information__right">
                    PONAD 200
                  </h4>
                  <p className="baize-information__content baize-information__right">
                    zadowolonych klientów
                  </p>
                </Container>
              </Row>
              <Row className="pt-5 pb-5"></Row>
            </Col>
            <Col sm={6}>
              <Row className="pt-5 pb-5"></Row>
              <Row className="pt-5 pb-5">
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
              <Row className="pt-5 pb-5"></Row>
              <Row className="pt-5 pb-5">
                <Container>
                  <h4 className="baize-information__title baize-information__left">
                    1300
                  </h4>
                </Container>
              </Row>
            </Col>
          </Row>
          <Container className="mt-4">
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

export default BaseInformation;
