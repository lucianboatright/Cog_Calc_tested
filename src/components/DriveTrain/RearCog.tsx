import React, { ChangeEvent, useContext, useState } from 'react';
import RearCogProvider, {RearCogContext} from '../Context/RearCogContext';
import RearCogSvg from '../../Assets/Svg/RearCogSvg.svg'

const RearCogCounter = () => {
    const { rearCog, textInput, rearIncroment, rearDecroment } = useContext(RearCogContext);

    let RearCogSizing = (rearCog * 4)

    return (
        <div className='RearCog_Component'>
            <div className='RearCog_details'>
                <div className="RearCogComponent" data-testid="RearCogComponent" id='RearCogComponent' >Rear Cog: {rearCog}</div>
                <div className='RearShifters'>
                    <div className='Rear_Shifters'>                    
                        <button className='RearShiftDown' data-testid="rearShiftDown" onClick={rearDecroment}>-</button>
                        <button className='RearShiftUp' data-testid="rearShiftUp" onClick={rearIncroment}>+</button>
                        <input className="RearShiftInput" min={9} max={46} type="number" value={rearCog} onChange={(e) => textInput(e.target.valueAsNumber)}></input>
                    </div>
                </div>
            </div>
            <div className='RearCog_Cog'>
                <img height={RearCogSizing} width={RearCogSizing} src={RearCogSvg}  style={{ animation: "rotation 2s infinite linear"}}/>                
            </div>

        </div>
    )
}

export default RearCogCounter;


