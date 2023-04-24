import "./index.scss";
import SectionTitle from "../LayoutElements/SectionTitle/SectionTitle";
import SliderBlock from "../LayoutElements/SliderBlock/SliderBlock";
import ButtonComponent from "../LayoutElements/ButtonComponent/ButtonComponent";
import { Container } from "react-bootstrap";

const SliderArendationBlock = () => {
  return (
    <>
      <SectionTitle
        sectionTitlePosition={"left"}
        sectionTitleContent={"WYNAJEM"}
      />
      <SliderBlock />
      <Container className="sliderArendationBlock-wrapper">
        <ButtonComponent
          buttonPath={"/katalog"}
          buttonText={"Przejść do katalogu"}
        />
      </Container>
    </>
  );
};

export default SliderArendationBlock;
