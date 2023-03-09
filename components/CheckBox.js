import React, { useState } from "react";

function CheckBox({ color, setCheckBoxColor }) {
  const [blue, setBlue] = useState(false);

  return (
    <div>
      <label for={color}>{color}</label>
      <input
        type="checkbox"
        value={color}
        name={color}
        checked={color}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default CheckBox;
