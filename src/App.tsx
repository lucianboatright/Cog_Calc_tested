import React from 'react';
import './App.css';
import { RearCog } from './components/Cogs/RearCog';

export const BasicCogs = () => <RearCog onRearShift={count => count} />

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Cog Calculator</div>
        <RearCog
        />
      </header>
    </div>
  );
}

export default App;
