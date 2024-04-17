import React from "react";

function AppleBasket({ appleCounter, BasketName }) {
  return (
    <div className="apple-basket">
      <h1>
        <span>{appleCounter}</span>apples
      </h1>
      <p>{BasketName}</p>
    </div>
  );
}

export default AppleBasket;
