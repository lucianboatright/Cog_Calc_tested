import React from 'react';
import './App.css';
// import { Details } from './components/Details/Details'
import RearCogProvider from './components/Context/rearCogContext';
// import RearCogCounter from './components/Cogs/RearCog'
import FrontCogProvider from './components/Context/frontCogContext';
// import FrontCogCounter from './components/Cogs/FrontCog';
import Details from './components/Details/Details'
import DriveTrain from './components/Cogs/DriveTrain';


function App() {
  return (
    <div className="App">
      <RearCogProvider>
        <FrontCogProvider>
          <div className="Title">
            <div>Cog Calculator</div>
          </div>
          <div className="Main_Body">
            <div className="DriveTrain">
                <DriveTrain />
            </div>
            <div className="Detials">
              <Details />
            </div>
          </div>
        </FrontCogProvider>
      </RearCogProvider>
    </div>
  );
}

export default App;
