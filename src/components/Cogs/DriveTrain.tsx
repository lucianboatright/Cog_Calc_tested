import React from 'react';
import RearCogCounter from './RearCog'
import FrontCogCounter from './FrontCog';

function DriveTrain() {
  return (
    <div>
        <div className="Cogs_Section">
            <div className="rearCogComponent">
                <RearCogCounter />
            </div>
            <div className="frontCogComponent">
                <FrontCogCounter />
            </div>
        </div>
    </div>
  );
}

export default DriveTrain;