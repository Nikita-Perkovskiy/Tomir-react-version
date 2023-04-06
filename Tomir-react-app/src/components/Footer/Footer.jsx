import { Col, Container, Row } from "react-bootstrap";
import "./index.scss";
import LinkElement from "../LinkElement/LinkElement";
import PolandSvgFlag from "./svges/PolandSvgFlag/PolandSvgFlag";
import UkraineSvgFlag from "./svges/UkraineSvgFlag/UkraineSvgFlag";
//import USASvgFlag from "./svges/USASvgFlag/USASvgFlag";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrap">
        <Container>
          <Row>
            <Col>
              <Container className="mt-3">
                <Row>
                  <Col className="text-start">
                    <div className="m-3">
                      <LinkElement
                        LinkColor={"whiteLinkColor"}
                        LinkPath={"./"}
                        LinkText={"O firme"}
                      />
                    </div>
                  </Col>
                  <Col className="text-start">
                    <div className="m-3">
                      <LinkElement
                        LinkColor={"whiteLinkColor"}
                        LinkPath={"./"}
                        LinkText={"Szkolenie i Serwis"}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-start">
                    <div className="m-3">
                      <LinkElement
                        LinkColor={"whiteLinkColor"}
                        LinkPath={"./"}
                        LinkText={"Wynajem"}
                      />
                    </div>
                  </Col>
                  <Col className="text-start">
                    <div className="m-3">
                      <LinkElement
                        LinkColor={"whiteLinkColor"}
                        toLink={"./"}
                        LinkText={"Kontakt"}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col>
              <Container>
                <Row className="text-center">
                  <Col className="text-center">
                    <div className="m-3">
                      <PolandSvgFlag />
                    </div>
                  </Col>
                  <Col className="text-center">
                    <div className="m-3">
                      <UkraineSvgFlag />
                    </div>
                  </Col>
                </Row>
                <Row className="text-center">
                  <div className="m-3">
                    <a
                      className="footer-text"
                      href="mailto:tomir.szczercow@gmail.com"
                    >
                      e-mail: tomir.szczercow@gmail.com
                    </a>
                  </div>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Row>
              <div
                className="mx-auto"
                style={{
                  height: "30px",
                  width: "60px",
                  backgroundColor: "white",
                  margin: "10px",
                }}
              ></div>
            </Row>
            <Row>
              <div
                className="mx-auto"
                style={{
                  height: "30px",
                  width: "60px",
                  backgroundColor: "white",
                  margin: "10px",
                }}
              ></div>
            </Row>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
