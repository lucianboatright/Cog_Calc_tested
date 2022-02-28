import React, { useContext } from 'react';
import { RearCogContext } from '../Context/RearCogContextProvider';
import RearCogSvg from '../../Assets/Svg/RearCogSvg.svg'

const RearCogCounter = () => {
    const { rearCog, textInput, rearIncroment, rearDecroment, rearReset } = useContext(RearCogContext);

    let RearCogSizing = (rearCog * 4)

    let RearCogHeight = (4 - (rearCog / 15))


   var stylingObject = {
        img: {
            // marginTop: `${RearCogHeight}rem`,
            animation: "rotation 2s infinite linear",
            display: "inline-block",
            verticalAlign: "middle"
        }
    }

    return (
        <div className='RearCog_Component'>
            <div className='Crank_Display'>
                <div className="inputLabel" data-testid="RearCogComponent" id='RearCogComponent' >Rear Cog<span className='Red_semi'> :</span> {rearCog}</div>
                <div className='RearShifters'>
                    <div className='Rear_Shifters'>      
                        <div>            
                            <button className='ShifterButton' data-testid="rearShiftDown" onClick={rearDecroment}>-</button>
                            <button className='ShifterButton' data-testid="rearShiftUp" onClick={rearIncroment}>+</button>
                        </div>  
                        <div>
                            <button className='resetButton' data-testid="RearReset" onClick={rearReset}>Reset</button>
                        </div>
                        {/* <input className="RearShiftInput" min={9} max={46} type="number" value={rearCog} onChange={(e) => textInput(e.target.valueAsNumber)}></input> */}
                    </div>
                </div>
            </div>
            <div className='RearCog_Cog'>
                <img alt='RearCog' height={RearCogSizing} width={RearCogSizing} src={RearCogSvg}  style={stylingObject.img}/>                
            </div>

        </div>
    )
}

export default RearCogCounter;


