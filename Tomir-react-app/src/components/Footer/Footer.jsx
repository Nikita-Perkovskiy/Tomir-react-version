import { Col, Container, Row } from "react-bootstrap";
import "./index.scss";
import LinkElement from "../LayoutElements/LinkElement/LinkElement";
import PolandSvgFlag from "./svges/PolandSvgFlag/PolandSvgFlag";
import UkraineSvgFlag from "./svges/UkraineSvgFlag/UkraineSvgFlag";
import USASvgFlag from "./svges/USASvgFlag/USASvgFlag";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrap">
        <Container>
          <Row className="d-flex flex-wrap justify-content-center">
            <Col xs={12} xl={6}>
              <Row className="mt-3">
                <Col className="text-center m-3">
                  <LinkElement
                    LinkColor={"whiteLinkColor"}
                    LinkPath={"/"}
                    LinkText={"O firme"}
                  />
                </Col>
                <Col className="text-center m-3">
                  <LinkElement
                    LinkColor={"whiteLinkColor"}
                    LinkPath={"/services"}
                    LinkText={"Uslugi"}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="text-center m-3">
                  <LinkElement
                    LinkColor={"whiteLinkColor"}
                    LinkPath={"/katalog"}
                    LinkText={"Katalog"}
                  />
                </Col>
                <Col className="text-center m-3">
                  <LinkElement
                    LinkColor={"whiteLinkColor"}
                    LinkPath={"/contact"}
                    LinkText={"Kontakt"}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12} xl={6}>
              <Row className="mt-3">
                <Col className="text-start m-3">
                  <Row>
                    <a className="footer-text" href="tel:+48 535 818 858">
                      Tomasz Ochnio
                    </a>
                  </Row>
                  <Row>
                    <a
                      className="footer-content-wrapper footer-text"
                      href="tel:+48 535 818 858"
                    >
                      tel.: 535 818 858
                    </a>
                  </Row>
                  <Row className="mt-2">
                    <div className="footer-svg-block">
                      <div>
                        <PolandSvgFlag />
                      </div>
                    </div>
                  </Row>
                </Col>
                <Col className="text-center m-3">
                  <Row>
                    <a className="footer-text" href="tel:+48 535 818 858">
                      Irina Swiglo-Ochnio
                    </a>
                  </Row>
                  <Row>
                    <a className="footer-text" href="tel:+48 696 790 045">
                      tel.: 696 790 045
                    </a>
                  </Row>
                  <Row className="mt-2">
                    <div className="footer-svg-block">
                      <div>
                        <PolandSvgFlag />
                      </div>
                      <div>
                        <UkraineSvgFlag />
                      </div>
                      <div>
                        <USASvgFlag />
                      </div>
                    </div>
                  </Row>
                </Col>
              </Row>
              <Row className="text-center m-3">
                <div className="footer-layout-wrapper">
                  <a
                    className="footer-text"
                    href="mailto:tomir.szczercow@gmail.com"
                  >
                    e-mail: tomir.szczercow@gmail.com
                  </a>
                </div>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5 pb-3">
            <Row className="mt-3">
              <div className="footer-copyright__wrapper">
                <h4 className="footer-copyright__logo">
                  <span>T</span>OM<span>I</span>R
                </h4>
                <p className="footer-copyright__text">
                  © 2022 Wszelkie prawa zastrzeżone
                </p>
              </div>
            </Row>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
