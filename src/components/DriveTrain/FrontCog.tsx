import React, { useContext } from 'react';
import { FrontCogContext } from '../Context/FrontCogContextProvider';
import FrontCog from '../../Assets/Svg/FrontCogSvg.svg'

const FrontCogCounter = () => {
    const { frontCog, frontIncroment, frontDecroment, frontReset } = useContext(FrontCogContext);

    let FrontCogSizing = (frontCog * 4)

    return (
        <div>
            <div className='FrontCog_Cog'>
                <img height={FrontCogSizing} width={FrontCogSizing} src={FrontCog}  style={{ animation: "rotation 2s infinite linear"}}/>                
            </div>
            <div className="inputLabel" data-testid="FrontCogComponent" id='FrontCogComponent' >Front Cog: {frontCog}</div>
            <div className='FrontShifters'>
                <div>
                    <button className='FrontShiftDown' data-testid="FrontShiftDown" onClick={frontDecroment}>-</button>
                    <button className='FrontShiftUp' data-testid="FrontShiftUp" onClick={frontIncroment}>+</button>
                </div>
            </div>
            <div>
                    <button className='FrontReset' data-testid="FrontReset" onClick={frontReset}>Reset</button>
                </div>
        </div>
    )
}

export default FrontCogCounter;