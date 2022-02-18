import React, { useContext } from 'react';
import RearCogProvider, {RearCogContext} from '../Context/RearCogContext';
import RearCogSvg from '../../Assets/Svg/RearCogSvg.svg'

const RearCogCounter = () => {
    const { rearCog, rearIncroment, rearDecroment } = useContext(RearCogContext);

    let RearCogSizing = (rearCog * 4)

    return (
        <div>
            <div className='RearCog_Cog'>
                <img height={RearCogSizing} width={RearCogSizing} src={RearCogSvg}  style={{ animation: "rotation 2s infinite linear"}}/>                
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


