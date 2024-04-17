import React from "react";

function Button({ imageUrl, imageTtle, clickHandler }) {
  return (
    <button onClick={clickHandler} title={imageTtle}>
      <img src={imageUrl} alt={imageTtle} />
    </button>
  );
}

export default Button;
