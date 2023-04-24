import { Image } from "react-bootstrap";
import "./index.scss";
import PropTypes from "prop-types";

const SlideCard = ({ sliderCardImage, sliderCardContent }) => {
  return (
    <>
      <div className="sliderCard__wrapper">
        <div className="sliderCard__content-wrapper">
          <Image
            src={sliderCardImage}
            style={{ height: "379px", width: "auto" }}
            alt="slideCardImage"
          />
          <div className="sliderCard__text-wrapper">
            <p className="sliderCard__text">{sliderCardContent}</p>
          </div>
        </div>
      </div>
    </>
  );
};

SlideCard.propTypes = {
  sliderCardImage: PropTypes.string.isRequired,
  sliderCardContent: PropTypes.string.isRequired,
};

export default SlideCard;
