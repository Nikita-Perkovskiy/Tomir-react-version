import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import PropTypes from "prop-types";

const Button = ({ text, path }) => {
  return (
    <>
      <div class="main-button__wrapper">
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
