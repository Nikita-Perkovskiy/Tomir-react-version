import { Col, Row, Container, Image } from "react-bootstrap";
import "./index.scss";
import SectionTitle from "../LayoutElements/SectionTitle/SectionTitle";
import ButtonComponent from "../LayoutElements/ButtonComponent/ButtonComponent";
import servicePhoto1 from "./images/IMG_5384.JPG";
import servicePhoto2 from "./images/imgonline-com-ua-Resize-CjHbLcdrKHRl(1).jpg";
import servicePhoto3 from "./images/imgonline-com-ua-Resize-OBO0PffBnCYZ.jpg";
import servicePhoto4 from "./images/imgonline-com-ua-Resize-sPFPwCPTlhEK7s.jpg";
import servicePhoto5 from "./images/imgonline-com-ua-Resize-RdsyHXv3SQYo.jpg";
import servicePhoto6 from "./images/imgonline-com-ua-Resize-nzeIr1IpWYP.jpg";
import servicePhoto7 from "./images/imgonline-com-ua-Resize-qFBwVkpkyAHbbw.jpg";

const ServiceBlock = () => {
  return (
    <>
      <SectionTitle
        sectionTitleContent={"Serwis"}
        sectionTitlePosition={"left"}
      />
      <Container>
        <Row className="mt-4 mb-4">
          <Col className="col-12 col-md-3 col-lg-2">
            <Container className="d-flex align-items-center justify-content-start">
              <Image
                className="serviceBlock__img"
                src={servicePhoto1}
                alt="servicePhoto1"
              />
            </Container>
          </Col>
          <Col className="d-flex align-items-center justify-content-start col-12 col-md-9 col-lg-10">
            <p className="serviceBlock__text serviceBlock__text-left">
              Pogwarancyjne przeglądy konserwacyjne podestów ruchomych i
              ładowarek teleskopowych
            </p>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col className="d-flex align-items-center justify-content-end col-12 col-md-9 col-lg-10">
            <p className="serviceBlock__text serviceBlock__text-right">
              Serwis mobilny na terenie całego kraju
            </p>
          </Col>
          <Col className="col-12 col-md-3 col-lg-2">
            <Container className="d-flex align-items-center justify-content-end">
              <Image
                className="serviceBlock__img"
                src={servicePhoto2}
                alt="servicePhoto2 "
              />
            </Container>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col className="col-12 col-md-3 col-lg-2">
            <Container className="d-flex align-items-center justify-content-start">
              <Image
                className="serviceBlock__img"
                src={servicePhoto3}
                alt="servicePhoto3"
              />
            </Container>
          </Col>
          <Col className="d-flex align-items-center justify-content-start col-12 col-md-9 col-lg-10">
            <p className="serviceBlock__text serviceBlock__text-left">
              Diagnostyka i naprawa podnośników, ładowarek teleskopowych i
              wózków widłowych
            </p>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col className="d-flex align-items-center justify-content-end col-12 col-md-9 col-lg-10">
            <div className="serviceBlock__text serviceBlock__text-right">
              <p className="service-block__content-text">
                Pomiary rezystancji elektrycznej
              </p>
            </div>
          </Col>
          <Col className="col-12 col-md-3 col-lg-2">
            <Container className="d-flex align-items-center justify-content-end">
              <Image
                className="serviceBlock__img"
                src={servicePhoto4}
                alt="servicePhoto4"
              />
            </Container>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col className="col-12 col-md-3 col-lg-2">
            <Container className="d-flex align-items-center justify-content-start">
              <Image
                className="serviceBlock__img"
                src={servicePhoto5}
                alt="servicePhoto5"
              />
            </Container>
          </Col>
          <Col className="d-flex align-items-center justify-content-start col-12 col-md-9 col-lg-10">
            <p className="serviceBlock__text serviceBlock__text-left">
              Przygotowanie do badań UDT oraz uczestnictwo podczas badania UDT
            </p>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col xs={9} className="d-flex align-items-center justify-content-end">
            <div className="serviceBlock__text serviceBlock__text-right">
              <p className="service-block__content-text">
                Dobór potrzebnych części
              </p>
            </div>
          </Col>
          <Col className="col-12 col-md-3 col-lg-2">
            <Container className="d-flex align-items-center justify-content-end">
              <Image
                className="serviceBlock__img"
                src={servicePhoto6}
                alt="servicePhoto6"
              />
            </Container>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col className="col-12 col-md-3 col-lg-2">
            <Container className="d-flex align-items-center justify-content-start">
              <Image
                className="serviceBlock__img"
                src={servicePhoto7}
                alt="servicePhoto7"
              />
            </Container>
          </Col>
          <Col className="d-flex align-items-center justify-content-start col-12 col-md-9 col-lg-10">
            <p className="serviceBlock__text serviceBlock__text-left">Resurs</p>
          </Col>
        </Row>
        <Container className="mt-5 pt-5">
          <ButtonComponent
            buttonPath={"/contact"}
            buttonText={" Zapytaj o szczegóły"}
          />
        </Container>
      </Container>
    </>
  );
};

export default ServiceBlock;
