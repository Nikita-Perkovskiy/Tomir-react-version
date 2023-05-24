import { Card } from "react-bootstrap";
import "./index.scss";

const CatalogCard = ({
  picture,
  alt,
  model,
  drive_unit,
  working_height,
  weight,
  carrying,
}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <div className="catalogCard__image-wrapper">
          <Card.Img
            variant="top"
            src={picture}
            alt={alt}
            className="catalogCard__image"
          />
        </div>
        <Card.Body>
          <Card.Text className="catalogCard__text pt-2">{model}</Card.Text>
          <Card.Text className="catalogCard__text pt-2">{drive_unit}</Card.Text>
          <Card.Text className="catalogCard__text pt-2">
            {working_height}
          </Card.Text>
          <Card.Text className="catalogCard__text pt-2">{carrying}</Card.Text>
          <Card.Text className="catalogCard__text pt-2">{weight}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CatalogCard;
