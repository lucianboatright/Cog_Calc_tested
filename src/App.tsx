import React, { useState } from 'react';
import './App.css';
import RearCogProvider from './components/Context/RearCogContext';
import FrontCogProvider from './components/Context/FrontCogContext';
import Details from './components/Details/Details'
import CrankProvider from './components/Context/CrankContext';
import WheelIndex from './components/Wheel/WheelIndex';
import TyreIndex from './components/Tyres/TyreIndex';
import Crank from './components/DriveTrain/Crank';
import RearCogCounter from './components/DriveTrain/RearCog';



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
                <div >
                    <RearCogCounter />
                </div>
                <div>
                    <Crank />
                </div>
                <div className='Wheel_Details'>
                  <WheelIndex childToParentWheel={childToParentWheel} childToParentWheelValue={childToParentWheelValue} />
                  <TyreIndex childToParentTyre={childToParentTyre} childToParentTyreValue={childToParentTyreValue} />
                </div>
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
