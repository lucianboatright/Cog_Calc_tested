import React, { useContext } from 'react';
import RearCogProvider, {RearCogContext} from '../Context/rearCogContext';

const RearCogCounter = () => {
    const { rearCog, rearIncroment, rearDecroment } = useContext(RearCogContext);

    return (
        <div>
            <div className="RearCogComponent" data-testid="RearCogComponent" id='RearCogComponent' >Rear Cog: {rearCog}</div>
            <div className='RearShifters'>
                <button className='RearShiftDown' data-testid="rearShiftDown" onClick={rearDecroment}>-</button>
                <button className='RearShiftUp' data-testid="rearShiftUp" onClick={rearIncroment}>+</button>
            </div>
        </div>
    )
}

export default RearCogCounter;


