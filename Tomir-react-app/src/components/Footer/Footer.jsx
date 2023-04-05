import { Col, Container, Row } from "react-bootstrap";
import "./index.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrap">
        <Container>
          <Row>
            <Col>
              <Container>
                <Row>
                  <Col
                    style={{
                      height: "30px",
                      width: "60px",
                      backgroundColor: "white",
                      margin: "10px",
                    }}
                  ></Col>
                  <Col
                    style={{
                      height: "30px",
                      width: "60px",
                      backgroundColor: "white",
                      margin: "10px",
                    }}
                  ></Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      height: "30px",
                      width: "60px",
                      backgroundColor: "white",
                      margin: "10px",
                    }}
                  ></Col>
                  <Col
                    style={{
                      height: "30px",
                      width: "60px",
                      backgroundColor: "white",
                      margin: "10px",
                    }}
                  ></Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      height: "30px",
                      width: "60px",
                      backgroundColor: "white",
                      margin: "10px",
                    }}
                  ></Col>
                  <Col
                    style={{
                      height: "30px",
                      width: "60px",
                      backgroundColor: "white",
                      margin: "10px",
                    }}
                  ></Col>
                </Row>
              </Container>
            </Col>
            <Col>
              <Container>
                <Col
                  style={{
                    height: "30px",
                    width: "60px",
                    backgroundColor: "white",
                    margin: "10px",
                  }}
                ></Col>
                <Col
                  style={{
                    height: "30px",
                    width: "60px",
                    backgroundColor: "white",
                    margin: "10px",
                  }}
                ></Col>
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
