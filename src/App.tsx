import React, { useState } from 'react';
import WheelSize from './components/Wheel/WheelSize';
import TyreSize from './components/Tyres/TyreSize';
import './App.css';
import RearCogProvider from './components/Context/RearCogContext';
import FrontCogProvider from './components/Context/FrontCogContext';
import Details from './components/Details/Details'
import DriveTrain from './components/DriveTrain/DriveTrain';
import CrankProvider from './components/Context/CrankContext';
import WheelIndex from './components/Wheel/WheelIndex';
import TyreIndex from './components/Tyres/TyreIndex';



function App() {
  const [wheelDataState, setWheelDataState] = useState('');
  const [wheelDataStateValue, setWheelDataStateValue] = useState('');
  const childToParentWheel = (wheelData: any) => {
    setWheelDataState(wheelData)
  }
  const childToParentWheelValue = (wheelDataStateValue: any) => {
    setWheelDataStateValue(wheelDataStateValue)
  }
  console.log(wheelDataStateValue)
  console.log(wheelDataState);

  const [tyreDataState, setTyreDataState] = useState('');
  const [tyreDataStateValue, setTyreDataStateValue] = useState('');
  const childToParentTyre = (tyreDataState: any) => {
    setTyreDataState(tyreDataState)
  }
  const childToParentTyreValue = (tyreDataStateValue: any) => {
    setTyreDataStateValue(tyreDataStateValue)
  }
  console.log(tyreDataStateValue)
  console.log(tyreDataState);

  return (
    <div className="App">
      <RearCogProvider>
        <FrontCogProvider>
          <CrankProvider>
              <div className="Title">
                <div>Cog Calculator</div>
              </div>
              <div className="Main_Body">
                <div className="DriveTrain">
                    <DriveTrain />
                </div>
                <WheelIndex childToParentWheel={childToParentWheel} childToParentWheelValue={childToParentWheelValue} />
                <TyreIndex childToParentTyre={childToParentTyre} childToParentTyreValue={childToParentTyreValue} />
                <div className="Detials">
                  <Details wheelSize={wheelDataState} wheelSizeValue={wheelDataStateValue} tyreTextValue={tyreDataStateValue} tyreText={tyreDataState} />
                </div>
              </div>
          </CrankProvider>
        </FrontCogProvider>
      </RearCogProvider>
    </div>
  );
}

export default App;
