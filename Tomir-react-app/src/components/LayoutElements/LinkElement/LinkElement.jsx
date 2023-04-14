import "./index.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinkElement = ({ LinkText, LinkPath, LinkColor }) => {
  return (
    <>
      <Link className={`link ${LinkColor}`} to={LinkPath}>
        {LinkText}
      </Link>
    </>
  );
};

LinkElement.propTypes = {
  LinkText: PropTypes.string.isRequired,
  LinkPath: PropTypes.string.isRequired,
  LinkColor: PropTypes.string.isRequired,
};

export default LinkElement;
