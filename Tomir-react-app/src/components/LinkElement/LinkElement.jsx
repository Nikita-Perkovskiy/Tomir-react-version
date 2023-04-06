import { text } from "@fortawesome/fontawesome-svg-core";
import "./index.scss";
import { Link } from "react-router-dom";

const LinkElement = ({ LinkText, LinkPath, LinkColor }) => {
  return (
    <>
      <Link className={`link ${LinkColor}`} to={LinkPath}>
        {LinkText}
      </Link>
    </>
  );
};

export default LinkElement;
