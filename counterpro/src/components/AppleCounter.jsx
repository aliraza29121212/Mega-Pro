import React, { useState } from "react";
import Button from "./Button";
import leftArrow from "../assets/images/left.png";
import RightArrow from "../assets/images/right.png";
import AppleBasket from "./AppleBasket";

function AppleCounter() {
  const [Leftcounter, setLeftCounter] = useState(10);
  const [RightCounter, setRightCounter] = useState(0);

  const LeftHandler = () => {
    if (RightCounter > 0) {
      setRightCounter(RightCounter - 1);
      setLeftCounter(Leftcounter + 1);
      console.log("left");
    }
  };

  const RightHandler = () => {
    if (Leftcounter > 0) {
      setLeftCounter(Leftcounter - 1);
      setRightCounter(RightCounter + 1);
      console.log("right");
    }
  };
  return (
    <section>
      <AppleBasket appleCounter={Leftcounter} BasketName="Basket 1" />
      <Button
        imageUrl={leftArrow}
        imageTitle="Left Arrow"
        clickHandler={LeftHandler}
      />
      <Button
        imageUrl={RightArrow}
        imageTitle="Right Arrow"
        clickHandler={RightHandler}
      />
      <AppleBasket appleCounter={RightCounter} BasketName="Basket 2" />
    </section>
  );
}

export default AppleCounter;
