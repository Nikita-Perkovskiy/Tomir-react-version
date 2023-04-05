import "./index.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ text, path }) => {
  return (
    <>
      <div className="main-button__wrapper">
        <Link className="main-button" to={path}>
          {text}
        </Link>
      </div>
    </>
  );
};

Button.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
