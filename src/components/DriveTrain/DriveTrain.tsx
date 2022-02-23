import React from 'react';
import RearCogCounter from './RearCog'

import Crank from './Crank';

function DriveTrain() {
  return (
    <div>
        <div className="Cogs_Section">
            <div className="rearCogComponent">
                <RearCogCounter />
            </div>
            <div className='cadanceRpm'>
                <Crank />
            </div>
            {/* <div className="frontCogComponent">
                <FrontCogCounter />
            </div> */}
        </div>
    </div>
  );
}

export default DriveTrain;