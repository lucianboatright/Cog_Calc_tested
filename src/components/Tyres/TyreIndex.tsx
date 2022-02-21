import React, { useState } from 'react';
import TyreSize from '../Tyres/TyreSize';
import Detail from '../Details/Details';


function TyreIndex({childToParentTyre, childToParentTyreValue}: any) {

    const [tyreValue, setTyreValue] = useState<string>("");
    const [tyreText, setTyreText] = useState<string>("")
  
  const tyreOptions = [
    { text: "20mm", value: "20.00" },
    { text: "23mm", value: "23.00" },
    { text: "25mm", value: "25.00" },
    { text: "26mm", value: "26.00" },
    { text: "27mm", value: "27.00" },
    { text: "28mm", value: "28.00" },
    { text: "30mm", value: "30.00" },
    { text: "32mm", value: "32.00" },
    { text: "33mm", value: "33.00" },
    { text: "35mm", value: "35.00" },
    { text: "37mm", value: "37.00" },
    { text: "38mm", value: "38.00" },
    { text: "40mm", value: "48.00" },
    { text: "42mm", value: "43.00" },
    { text: "44mm", value: "44.00" },
    { text: "45mm", value: "45.00" },
    { text: "50mm", value: "50.00" },
    { text: "56mm", value: "56.00" },
    { text: "1 Inch", value: "25.40" },
    { text: "1.25 Inch", value: "31.75" },
    { text: "1.35 Inch", value: "34.29" },
    { text: "1.40 Inch", value: "35.56" },
    { text: "1.50 Inch", value: "38.10" },
    { text: "1.75 Inch", value: "44.45" },
    { text: "1.90 Inch", value: "48.26" },
    { text: "1.95 Inch", value: "49.50" },
    { text: "2.00 Inch", value: "50.80" },
    { text: "2.10 Inch", value: "53.34" },
    { text: "2.125 Inch", value: "54.00" },
    { text: "2.20 Inch", value: "55.88" },
    { text: "2.25 Inch", value: "57.15" },
    { text: "2.30 Inch", value: "58.42" },
    { text: "2.35 Inch", value: "59.69" },
    { text: "2.40 Inch", value: "60.96" },
    { text: "2.50 Inch", value: "63.50" },
    { text: "2.60 Inch", value: "66.04" },
    { text: "2.75 Inch", value: "69.85" },
    { text: "2.80 Inch", value: "71.12" },
    { text: "3.00 Inch", value: "76.20" },
    { text: "3.80 Inch", value: "96.52" },
    { text: "4.00 Inch", value: "101.60" },
    { text: "4.25 Inch", value: "107.95" },
    { text: "4.5 Inch", value: "114.30" },
    { text: "4.70 Inch", value: "116.84" },
    { text: "4.80 Inch", value: "119.38" },
    { text: "4.90 Inch", value: "121.92" },
    { text: "5.00 Inch", value: "124.46" },
  ];

  return (
    <div className='tyre_selection' data-testid='tyre_selection_id'>
        <div data-testid="WheelSize_Display">Tyre Size: {tyreText}</div>
        <TyreSize
            data-testid="TyreSize_Dropdown"
            label="Select size"
            placeholder="Select size"
            options={tyreOptions}
            handleChange={(e: string) => setTyreValue(e)}
            handleChangeText={(e: string) => setTyreText(e)}
            onChange={(e: string) => childToParentTyre(e)}
            onChangeValue={(e: string) => childToParentTyreValue(e)}
        />

    </div>

  );
}

export default TyreIndex;