import React, { useContext } from 'react';
import { FrontCogContext } from '../Context/frontCogContext';

const FrontCogCounter = () => {
    const { frontCog, frontIncroment, frontDecroment } = useContext(FrontCogContext);

    return (
        <div>
            <div className="FrontCogComponent" data-testid="FrontCogComponent" id='FrontCogComponent' >Front Cog: {frontCog}</div>
            <button data-testid="frontShiftDown" onClick={frontDecroment}>-</button>
            <button data-testid="frontShiftUp" onClick={frontIncroment}>+</button>
        </div>
    )
}

export default FrontCogCounter;
