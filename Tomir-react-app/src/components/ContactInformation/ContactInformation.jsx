import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";

const ContactInformation = () => {
  return (
    <>
      <Container>
        <Container className="mt-5 mb-5">
          <a
            className="contactInformation__mail"
            href="mailto:tomir.szczercow@gmail.com"
          >
            szczercow@gmail.com
          </a>
        </Container>
        <Container className="mt-5 mb-5">
          <Row className="mt-4 mb-4">
            <Col className="contactInformation__content-wrapper">
              <p className="contactInformation__name"> Tomasz Ochnio:</p>
            </Col>
            <Col className="contactInformation__content-wrapper">
              <a
                className="contactInformation__number"
                href="tel:+48 535 818 858"
              >
                tel.: +48 535 818 858
              </a>
            </Col>
          </Row>
          <Row className="mt-4 mb-4">
            <Col className="contactInformation__content-wrapper">
              <p className="contactInformation__name"> Irina Swiglo-Ochnio: </p>
            </Col>
            <Col className="contactInformation__content-wrapper">
              <a
                className="contactInformation__number"
                href="tel:+48 696 790 045"
              >
                tel.: +48 696 790 045
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default ContactInformation;
