import React, { useContext } from 'react';
import { FrontCogContext } from '../Context/frontCogContext';

const FrontCogCounter = () => {
    const { frontCog, frontIncroment, frontDecroment } = useContext(FrontCogContext);

    return (
        <div>
            <div className='FrontCog_Cog'>
            <svg height="180" width="180">
                    <circle cx="90" cy="90" r={frontCog} stroke-dasharray="2 4" stroke="black" stroke-width="3" fill="aqua" />
                    Sorry, your browser does not support inline SVG.  
                </svg> 
            </div>
            <div className="FrontCogComponent" data-testid="FrontCogComponent" id='FrontCogComponent' >Front Cog: {frontCog}</div>
            <div className='FrontShifters'>
                <button className='FrontShiftDown' data-testid="FrontShiftDown" onClick={frontDecroment}>-</button>
                <button className='FrontShiftUp' data-testid="FrontShiftUp" onClick={frontIncroment}>+</button>
            </div>
        </div>
    )
}

export default FrontCogCounter;