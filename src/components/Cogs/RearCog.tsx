import React, { useContext } from 'react';
import RearCogProvider, {RearCogContext} from '../Context/rearCogContext';

const RearCogCounter = () => {
    const { rearCog, rearIncroment, rearDecroment } = useContext(RearCogContext);

    return (
        <div>
            <div className="RearCogComponent" data-testid="RearCogComponent" id='RearCogComponent' >Rear Cog: {rearCog}</div>
            <button data-testid="rearShiftUp" onClick={rearIncroment}>+</button>
            <button data-testid="rearShiftDown" onClick={rearDecroment}>-</button>
        </div>
    )
}

export default RearCogCounter;


