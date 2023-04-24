import { Col, Container, Image, Row } from "react-bootstrap";
import aboutFirmFon from "./images/firm-information-fon.png";
import aboutFirmel1 from "./images/about-firm-element-1.png";
import aboutFirmel2 from "./images/about-firm-element-2.png";
import aboutFirmel3 from "./images/about-firm-element-3.png";
import "./index.scss";
import SectionTitle from "../LayoutElements/SectionTitle/SectionTitle";

const AboutFirmBanner = () => {
  return (
    <>
      <SectionTitle
        sectionTitleContent={"O FIRMIE"}
        sectionTitlePosition={"right"}
      />
      <div className="aboutFirm__wrapper">
        <Image
          src={aboutFirmFon}
          style={{ height: "450px", width: "100%", objectFit: "cover" }}
          alt="about firm fon picture"
          fluid
        />
        <Container className="aboutFirm__content-wrapper">
          <Row>
            <p className="aboutFirm__content mt-2 mb-2">
              Posiadamy własny park podnośników, ładowarek teleskopowych i
              wózków widłowych. Swoim klientom oferujemy maszyny znanych
              producentów:
              <span> JLG, Genie, Manitou, Kalmar, Linde, JCB</span>
            </p>
          </Row>
          <Row>
            <Col>
              <Row className="aboutFirm__image-wrapper">
                <div className="aboutFirm__image">
                  <Image src={aboutFirmel1} alt="aboutFirmel1" />
                </div>
              </Row>
              <Row>
                <p className="aboutFirm__content mt-2 mb-2">
                  Znajdujemy rozwiązania przy skomplikowanych sprawach i
                  dostawach maszyn
                </p>
              </Row>
            </Col>
            <Col>
              <Row className="aboutFirm__image-wrapper">
                <div className="aboutFirm__image">
                  <Image src={aboutFirmel2} alt="aboutFirmel2" />
                </div>
              </Row>
              <Row>
                <p className="aboutFirm__content mt-2 mb-2">
                  Świadczymy usługi na terenie całego kraju
                </p>
              </Row>
            </Col>
            <Col>
              <Row className="aboutFirm__image-wrapper">
                <div className="aboutFirm__image">
                  <Image src={aboutFirmel3} alt="aboutFirmel3" />
                </div>
              </Row>
              <Row>
                <p className="aboutFirm__content mt-2 mb-2">Pracujemy 24H/7</p>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutFirmBanner;
