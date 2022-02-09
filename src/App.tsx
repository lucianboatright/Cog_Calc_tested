import React from 'react';
import './App.css';
import { DriveTrain } from './components/Cogs/DriveTrain'
import { Details } from './components/Details/Details'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <div>Scroll Down and </div>
      </header> */}
      <div>
      <div>Cog Calculator</div>
        <DriveTrain />
      </div>
      <div>
          <div>Cog Details</div>
          <Details />
      </div>
    </div>
  );
}

export default App;
