import React, { useContext } from 'react';
import RearCogProvider, {RearCogContext} from '../Context/rearCogContext';

const RearCogCounter = () => {
    const { rearCog, rearIncroment, rearDecroment } = useContext(RearCogContext);

    return (
        <div>
            <div className='RearCog_Cog'>
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r={rearCog} stroke-dasharray="2 4" stroke="black" stroke-width="3" fill="aqua" />
                    Sorry, your browser does not support inline SVG.  
                </svg> 
            </div>
            <div className="RearCogComponent" data-testid="RearCogComponent" id='RearCogComponent' >Rear Cog: {rearCog}</div>
            <div className='RearShifters'>
                <button className='RearShiftDown' data-testid="rearShiftDown" onClick={rearDecroment}>-</button>
                <button className='RearShiftUp' data-testid="rearShiftUp" onClick={rearIncroment}>+</button>
            </div>
        </div>
    )
}

export default RearCogCounter;


