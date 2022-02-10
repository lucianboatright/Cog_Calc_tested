import React, { useContext } from 'react';
import { FrontCogContext } from '../Context/frontCogContext';

const FrontCogCounter = () => {
    const { frontCog, frontIncroment, frontDecroment } = useContext(FrontCogContext);

    return (
        <div>
            <div className="FrontCogComponent" data-testid="FrontCogComponent" id='FrontCogComponent' >Front Cog: {frontCog}</div>
            <div className='FrontShifters'>
                <button className='FrontShiftDown' data-testid="FrontShiftDown" onClick={frontDecroment}>-</button>
                <button className='FrontShiftUp' data-testid="FrontShiftUp" onClick={frontIncroment}>+</button>
            </div>
        </div>
    )
}

export default FrontCogCounter;