import React from 'react';
import './App.css';
// import { Details } from './components/Details/Details'
import RearCogProvider from './components/Context/RearCogContext';
// import RearCogCounter from './components/Cogs/RearCog'
import FrontCogProvider from './components/Context/FrontCogContext';
// import FrontCogCounter from './components/Cogs/FrontCog';
import Details from './components/Details/Details'
import DriveTrain from './components/DriveTrain/DriveTrain';
import CrankProvider from './components/Context/CrankContext';
import WheelSelect from './components/Context/WheellContext'
// import WheelProvider from './components/Context/WheellContext';

// import WheelSizes from './components/Wheel/WheelSize'
// import DropDownProps from './components/Context/WheellContext';
// import WheelMenue from './components/Wheel/WheelSize';

import WheelDropDown from './components/Context/WheellContext';
// import { Select } from './components/Context/WheellContext';


function App() {
  return (
    <div className="App">
      <RearCogProvider>
        <FrontCogProvider>
          <CrankProvider>
            {/* <DropDownProps> */}
              <div className="Title">
                <div>Cog Calculator</div>
              </div>
              <div className="Main_Body">
                <div className="DriveTrain">
                    <DriveTrain />
                </div>
                <div>
                  <WheelDropDown />
                </div>
                <div className="Detials">
                  <Details />
                </div>
              </div>
            {/* </DropDownProps> */}
          </CrankProvider>
        </FrontCogProvider>
      </RearCogProvider>
    </div>
  );
}

export default App;
