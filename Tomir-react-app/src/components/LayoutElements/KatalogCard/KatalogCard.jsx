import { Container, Card } from "react-bootstrap";
import "./index.scss";

const KatalogCard = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.roza4u.ru/image/cache/catalog/roza6red/IMG_4230.jpg-1400x1400.jpg"
        />
        <Card.Body>
          <Card.Text className="kataloPage__text pt-2">GENIE GS 2646</Card.Text>
          <Card.Text className="kataloPage__text pt-2">
            Napęd elektryczny
          </Card.Text>
          <Card.Text className="kataloPage__text pt-2">
            wys. rob. : 9,92m
          </Card.Text>
          <Card.Text className="kataloPage__text pt-2">
            Udźwig: 454 kg
          </Card.Text>
          <Card.Text className="kataloPage__text pt-2">Waga: 2447 kg</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default KatalogCard;
