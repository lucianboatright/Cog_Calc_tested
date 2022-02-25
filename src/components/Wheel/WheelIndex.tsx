import React, { useState } from 'react';
import WheelSize from './WheelSize';



function WheelIndex({childToParentWheel, childToParentWheelValue}: any) {

  const [value, setValue] = useState<string>("");
  const [text, setText] = useState<string>("")

  const wheelOptions = [
    { text: "28 Inch", value: "635" },
    { text: "27 Inch", value: "630" },
    { text: "29 Inch / 700c", value: "622" },
    { text: "26 Inch", value: "559" },
    { text: "650b / 27.5 Inch", value: "584" },
    { text: "24 Inch", value: "559" },
    { text: "16 Inch", value: "349" }
  ];

  return (
    <div className='wheel_selection' data-testid='wheel_selection_id'>
        <div className='inputLabel' data-testid="WheelSize_Display">Wheel Size<span className='Red_semi'> : </span> {text}</div>
        <WheelSize
            data-testid="WheelSize_Dropdown"
            // label="Select size"
            placeholder="Select size"
            options={wheelOptions}
            handleChange={(e: string) => setValue(e)}
            handleChangeText={(e: string) => setText(e)}
            onChange={(e: string) => childToParentWheel(e)}
            onChangeValue={(e: string) => childToParentWheelValue(e)}
        />

    </div>

  );
}

export default WheelIndex;
