import React from 'react';
import './App.css';
// import { DriveTrain } from './components/Cogs/DriveTrain'
// import { Details } from './components/Details/Details'
import RearCogProvider from './components/Context/rearCogContext';
import RearCogCounter from './components/Cogs/RearCog'


function App() {
  return (
    <RearCogProvider>
        <div className="App">
          <div>Cog Calculator</div>
          <RearCogCounter />
        </div>
    </RearCogProvider>
  );
}

export default App;
