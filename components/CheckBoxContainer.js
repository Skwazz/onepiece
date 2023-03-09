import React, { useState } from "react";
import CheckBox from "./CheckBox";

function CheckBoxContainer({ colors, setCheckBoxColor }) {
  return (
    <>
      <div>
        {colors.map((color) => {
          return <CheckBox color={color} setCheckBoxColor={setCheckBoxColor} />;
        })}
      </div>
    </>
  );
}

export default CheckBoxContainer;
