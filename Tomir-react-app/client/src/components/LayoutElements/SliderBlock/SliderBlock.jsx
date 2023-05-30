import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideCard from "./SlideCard/SlideCard";
import slideCardImage1 from "./images/imgonline-com-ua-Resize-8iJblKN2GZzZomLN.jpg";
import slideCardImage2 from "./images/20230515_162150.jpg";
import slideCardImage3 from "./images/imgonline-com-ua-Resize-NBixGGdL6h.jpg";
import slideCardImage4 from "./images/imgonline-com-ua-Resize-ZGJ97rA5LAGvHN.jpg";
import slideCardImage5 from "./images/imgonline-com-ua-Resize-ZPsEIIomgGXBOIQ.jpg";
import slideCardImage6 from "./images/imgonline-com-ua-Resize-tQhYbbddMdzNlLrB.jpg";
import { Container } from "react-bootstrap";
import PrevArrow from "./PrevArrow/PrevArrow";
import NextArrow from "./NextArrow/NextArrow";

const SliderBlock = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className="mt-5 mb-5">
      <Slider {...settings}>
        <div>
          <SlideCard
            sliderCardImage={slideCardImage1}
            sliderCardContent={"Wózki widłowe"}
          />
        </div>
        <div>
          <SlideCard
            sliderCardImage={slideCardImage2}
            sliderCardContent={"Ładowarki teleskopowe"}
          />
        </div>
        <div>
          <SlideCard
            sliderCardImage={slideCardImage3}
            sliderCardContent={"Podnośniki nożycowe spalinowe "}
          />
        </div>
        <div>
          <SlideCard
            sliderCardImage={slideCardImage4}
            sliderCardContent={"Podnośniki teleskopowo-przegubowe spalinowe"}
          />
        </div>
        <div>
          <SlideCard
            sliderCardImage={slideCardImage5}
            sliderCardContent={"Podnośniki teleskopowo przeguboweelektryczne"}
          />
        </div>
        <div>
          <SlideCard
            sliderCardImage={slideCardImage6}
            sliderCardContent={"Podnośniki teleskopowe spalinowe"}
          />
        </div>
      </Slider>
    </Container>
  );
};

export default SliderBlock;
