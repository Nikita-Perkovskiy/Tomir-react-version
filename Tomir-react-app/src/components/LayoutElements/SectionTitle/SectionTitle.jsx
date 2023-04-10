import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import "./index.scss";

const SectionTitle = ({ sectionTitlePosition, sectionTitleContent }) => {
  return (
    <>
      <Container className="mt-5 mb-5">
        {sectionTitlePosition === "left" ? (
          <div className="d-lg-flex   justify-content-left">
            <h2 className="sectionTitle">{sectionTitleContent}</h2>
          </div>
        ) : (
          <div className="d-lg-flex justify-content-end">
            <h2 className="sectionTitle">{sectionTitleContent}</h2>
          </div>
        )}
      </Container>
    </>
  );
};

SectionTitle.propTypes = {
  sectionTitleStyle: PropTypes.string.isRequired,
  sectionTitleContent: PropTypes.string.isRequired,
};

export default SectionTitle;
