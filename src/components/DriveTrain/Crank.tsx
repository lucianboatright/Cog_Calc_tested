import React, {useContext} from "react";
import { CrankContext } from "../Context/CrankContextProvider";
import { FrontCogContext } from '../Context/FrontCogContextProvider';
import FrontCog from '../../Assets/Svg/FrontCogSvg.svg'

// var stylingObject = {
//     img: {
//         animation: `rotation 8s infinite linear`
//   }
// }
  

const Crank = () => {
   const { crankRpm, IncreaseCadance, DecreaseCadance, resetCadance } = useContext(CrankContext);
   const { frontCog, frontIncroment, frontDecroment, frontReset } = useContext(FrontCogContext);

   let FrontCogSizing = (frontCog * 4)
   const rpm = (crankRpm / 60)

//    var css = `body { background: ${crankRpm} }`

   var stylingObject = {
    img: {
        animation: `rotation ${rpm}s infinite linear`
    }
  }

   return (
       <div className="Crank_Component">
           {/* <div> */}
            <div className="Crank_Display_Rpm">
                <div className="inputLabel" data-testid="Display_Cadance">Cadance<span className='Red_semi'> :</span> {crankRpm}rpm</div>
                <div className='FrontShifters'>
                    <button className="ShifterButton" data-testid='DecreaseCadance' onClick={DecreaseCadance}>-</button>
                    <button className="ShifterButton" data-testid='IncreaseCadance' onClick={IncreaseCadance}>+</button>
                    <div>
                    <button className='resetButton' data-testid="resetCadance" onClick={resetCadance}>Reset</button>
                    </div>
                </div>
            </div>
            <div className="Crank_Display_Cog">
                <div className="inputLabel" data-testid="FrontCogComponent" id='FrontCogComponent' >Front Cog<span className='Red_semi'> :</span> {frontCog}</div>
                <div className='FrontShifters'>
                    <button className='ShifterButton' data-testid="FrontShiftDown" onClick={frontDecroment}>-</button>
                    <button className='ShifterButton' data-testid="FrontShiftUp" onClick={frontIncroment}>+</button>
                    <div>
                        <button className='resetButton' data-testid="FrontReset" onClick={frontReset}>Reset</button>
                    </div>
                </div>
            </div>
            {/* </div> */}
            <div className="Crank_Display_Svg">
                <img className="CrankSvg" src={FrontCog} alt="Crank" height={FrontCogSizing} width={FrontCogSizing} style={stylingObject.img} />
           </div>
       </div>
   )
}

export default Crank;