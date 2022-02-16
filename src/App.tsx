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
// import WheelProvider from './components/Context/WheellContext';


import { DashboardWidget } from './components/Wheel/WheelWidget';


function App() {
  return (
    <div className="App">
      <RearCogProvider>
        <FrontCogProvider>
          <CrankProvider>
            {/* <SelectProvider > */}
              <div className="Title">
                <div>Cog Calculator</div>
              </div>
              <div className="Main_Body">
                <div className="DriveTrain">
                    <DriveTrain />
                </div>
                <div>
                <DashboardWidget title="Distance of Planets to the Sun">
                  <div>Hello</div>
                </DashboardWidget>

                <DashboardWidget title="Time Dilation and the Speed of Light">
                <div>Hello</div>
                </DashboardWidget>
                </div>
                <div className="Detials">
                  <Details />
                </div>
              </div>
            {/* </SelectProvider> */}
          </CrankProvider>
        </FrontCogProvider>
      </RearCogProvider>
    </div>
  );
}

export default App;
