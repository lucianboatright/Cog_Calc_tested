import React, { useState } from 'react';
import WheelSize from './components/Wheel/WheelSize';
import './App.css';
// import { Details } from './components/Details/Details'
import RearCogProvider from './components/Context/RearCogContext';
// import RearCogCounter from './components/Cogs/RearCog'
import FrontCogProvider from './components/Context/FrontCogContext';
// import FrontCogCounter from './components/Cogs/FrontCog';
import Details from './components/Details/Details'
import DriveTrain from './components/DriveTrain/DriveTrain';
import CrankProvider from './components/Context/CrankContext';
// import WheelProvider from './components/Context/WheellContext';



function App() {

  const [value, setValue] = useState<string>("");
  const [text, setText] = useState<string>("")

  const options = [
    { text: "28 Inch", value: "635" },
    { text: "27 Inch", value: "630" },
    { text: "29 Inch / 700c", value: "622" },
    { text: "26 Inch", value: "559" },
    { text: "650b / 27.5 Inch", value: "584" },
    { text: "24 Inch", value: "559" },
    { text: "16 Inch", value: "349" }
  ];
  console.log(value);
  console.log(text);
  // console.log(text);

  return (
    <div className="App">
      <RearCogProvider>
        <FrontCogProvider>
          <CrankProvider>
            {/* <WheelProvider > */}
              <div className="Title">
                <div>Cog Calculator</div>
              </div>
              <div className="Main_Body">
                <div className="DriveTrain">
                    <DriveTrain />
                </div>
                <div>
                <div>value: {value}</div>
                  <WheelSize
                    label="Select size"
                    placeholder="Select size"
                    options={options}
                    handleChange={(e: string) => setValue(e)}
                    handleChangeText={(e: string) => setText(e)}
                    // handleChange={(e: string) => setText(e)}
                  />
                </div>
                <div className="Detials">
                  <Details wheelSize={value} wheelType={text}/>
                </div>
              </div>
            {/* </WheelProvider> */}
          </CrankProvider>
        </FrontCogProvider>
      </RearCogProvider>
    </div>
  );
}

export default App;
