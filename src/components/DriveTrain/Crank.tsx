import React, {useContext} from "react";
import { CrankContext } from "../Context/CrankContext";

import CrankSvg from '../../Assets/Svg/CrankSvg.svg'
import { FrontCogContext } from '../Context/FrontCogContext';
import FrontCog from '../../Assets/Svg/FrontCogSvg.svg'

// var stylingObject = {
//     img: {
//         animation: `rotation 8s infinite linear`
//   }
// }
  

const Crank = () => {
   const { crankRpm, IncreaseCadance, DecreaseCadance } = useContext(CrankContext);
   const { frontCog, frontIncroment, frontDecroment } = useContext(FrontCogContext);

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
                <div data-testid="Display_Cadance">Cadance<span className='Red_semi'> :</span> {crankRpm}rpm</div>
                <div className='FrontShifters'>
                    <button className="DecreaseCadance" data-testid='DecreaseCadance' onClick={DecreaseCadance}>-</button>
                    <button className="IncreaseCadance" data-testid='IncreaseCadance' onClick={IncreaseCadance}>+</button>
                </div>
            </div>
            <div className="Crank_Display_Cog">
                <div className="FrontCogComponent" data-testid="FrontCogComponent" id='FrontCogComponent' >Front Cog<span className='Red_semi'> :</span> {frontCog}</div>
                <div className='FrontShifters'>
                    <button className='FrontShiftDown' data-testid="FrontShiftDown" onClick={frontDecroment}>-</button>
                    <button className='FrontShiftUp' data-testid="FrontShiftUp" onClick={frontIncroment}>+</button>
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