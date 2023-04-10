import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./index.scss";

const SectionTitle = ({ sectionTitleStyle }) => {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <h2 className={`${sectionTitleStyle}`}>WYNAJEM</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

SectionTitle.propTypes = {
  sectionTitleStyle: PropTypes.string.isRequired,
};

export default SectionTitle;
