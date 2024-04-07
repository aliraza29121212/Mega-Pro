import React from "react";
import Component1 from "./Component1";

function Button() {
  return (
    <div>
      <Button>
        {" "}
        <span>
          <Component1 />
        </span>{" "}
        I am a Button
      </Button>
    </div>
  );
}

export default Button;
