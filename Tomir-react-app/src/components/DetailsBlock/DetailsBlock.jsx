import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../LayoutElements/SectionTitle/SectionTitle";
import "./index.scss";
import SVG_JCB from "./SVGes/SVG_JCB/SVG-JCB";
import SVG_Haulotte from "./SVGes/SVG_Haulotte/SVG_Haulotte";
import SVG_Genie from "./SVGes/SVG_Genie/SVG_Genie";
import SVG_DEUTZ from "./SVGes/SVG_DEUTZ/SVG_DEUTZ";
import SVG_Linde from "./SVGes/SVG_Linde/SVG_Linde";
import SVG_JLG from "./SVGes/SVG_JLG/SVG_JLG";
import SVG_Toyota from "./SVGes/SVG_Toyota/SVG_Toyota";
import SVG_Manitou from "./SVGes/SVG_Manitou/SVG_Manitou";

const DetailsBlock = () => {
  const SVGitems = [
    <SVG_JCB />,
    <SVG_Haulotte />,
    <SVG_Genie />,
    <SVG_DEUTZ />,
    <SVG_Linde />,
    <SVG_JLG />,
    <SVG_Toyota />,
    <SVG_Manitou />,
  ];
  return (
    <>
      <Container>
        <SectionTitle
          sectionTitleContent={"CZĘŚCI I KOMPONENTY"}
          sectionTitlePosition={"right"}
        />
        <Container className="mt-3 mb-3">
          <Row className="mt-3 mb-3">
            <Col xs={1} className="m-auto">
              <Container className="textList__circule"></Container>
            </Col>
            <Col xs={11}>
              <p className="textList__text">
                Poszukujesz oryginalnych części do swoich maszyn, ładowarki
                teleskopowej, podnośnika czy wózka widłowego? TOMIR specjalizuje
                się w dostarczaniu <span>oryginalnych części</span> (zamiennych)
                i <span>akcesoriów</span>.
              </p>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col xs={1} className="m-auto">
              <Container className="textList__circule"></Container>
            </Col>
            <Col xs={11}>
              <p className="textList__text">
                Wózków widłowych ze zmiennym wysięgiem (ładowarki teleskopowe
                "MANITOU").
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center">
            {SVGitems.map((item, index) => (
              <Col key={index} className="mb-4">
                {item}
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default DetailsBlock;
