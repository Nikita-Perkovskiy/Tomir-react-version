import "./index.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonComponent = ({ buttonText, buttonPath }) => {
  return (
    <>
      <div className="main-button__wrapper">
        <Link className="main-button" to={buttonPath}>
          {buttonText}
        </Link>
      </div>
    </>
  );
};

ButtonComponent.propTypes = {
  buttonPath: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ButtonComponent;
