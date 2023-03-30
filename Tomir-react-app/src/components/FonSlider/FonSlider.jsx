import { React, useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import FonPicture1 from "./images/closeUpWarehoueView.jpg";
import FonPicture2 from "./images/lotOldInstrumentsToOldBox.jpg";
import FonPicture3 from "./images/youngManEngineerWorkingFactory.jpg";
import "./index.scss";

const FonSlider = () => {
  const fonPicturesArray = [FonPicture1, FonPicture2, FonPicture3];
  const [activeFonPicture, setActiveFonPicture] = useState(FonPicture1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveFonPicture(fonPicturesArray[count]);
      setCount(count + 1);
      if (count === 2) {
        setCount(0);
        clearTimeout(timeout);
      }
    }, 3000);
  }, [activeFonPicture, count, fonPicturesArray]);

  return (
    <>
      <div>
        <div className="header-slogo__background">
          <Image
            src={activeFonPicture}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
          <div className="header-slogo__content-wrap">
            <h3>
              <span>FIRMA</span> TOMIR
            </h3>
            <p>Z nami możesz wyżej!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FonSlider;
