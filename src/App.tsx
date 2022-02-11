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
import WheelProvider from './components/Context/WheellContext';

import WheelSizes from './components/Wheel/WheelSize'


function App() {
  return (
    <div className="App">
      <RearCogProvider>
        <FrontCogProvider>
          <CrankProvider>
            <WheelProvider>
              <div className="Title">
                <div>Cog Calculator</div>
              </div>
              <div className="Main_Body">
                <div className="DriveTrain">
                    <DriveTrain />
                </div>
                <div>
                  <WheelSizes />
                </div>
                <div className="Detials">
                  <Details />
                </div>
              </div>
            </WheelProvider>
          </CrankProvider>
        </FrontCogProvider>
      </RearCogProvider>
    </div>
  );
}

export default App;
