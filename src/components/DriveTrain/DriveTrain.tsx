import React from 'react';
import RearCogCounter from './RearCog'
import FrontCogCounter from './FrontCog';
import Crank from './Crank';

function DriveTrain() {
  return (
    <div>
        <div className="Cogs_Section">
            <span className="rearCogComponent">
                <RearCogCounter />
            {/* </span>
            <span className='cadanceRpm'> */}
                <Crank />
            </span>
            {/* <div className="frontCogComponent">
                <FrontCogCounter />
            </div> */}
        </div>
    </div>
  );
}

export default DriveTrain;