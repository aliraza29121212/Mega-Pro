import React from "react";

function AppleBasket({ appleCounter, BasketName }) {
  return (
    <div className="apple-basket">
      <h1>
        <span>{appleCounter}</span>apples
      </h1>
      <p>{BasketName}</p>
      {appleCounter === 10 && <span>(Full)</span>}
      {appleCounter === 0 && <span>(Epmty)</span>}
    </div>
  );
}

export default AppleBasket;
