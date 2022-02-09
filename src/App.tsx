import React from 'react';
import './App.css';
// import { DriveTrain } from './components/Cogs/DriveTrain'
// import { Details } from './components/Details/Details'
import RearCogProvider from './components/Context/rearCogContext';
import RearCogCounter from './components/Cogs/RearCog'
import FrontCogProvider from './components/Context/frontCogContext';
import FrontCogCounter from './components/Cogs/frontCog';


function App() {
  return (
    <div className="App">
      <div>Cog Calculator</div>
      <RearCogProvider>
          <div className="rearCogComponent">
            <RearCogCounter />
          </div>
      </RearCogProvider>
      <FrontCogProvider>
        <div className="frontCogComponent">
            <FrontCogCounter />
        </div>
      </FrontCogProvider>
    </div>
  );
}

export default App;
