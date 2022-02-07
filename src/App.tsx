import React from 'react';
import './App.css';
import { DriveTrain } from './components/Cogs/DriveTrain'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Cog Calculator</div>
        <DriveTrain />
      </header>
    </div>
  );
}

export default App;
