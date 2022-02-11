import React, {useContext} from "react";
import { CrankContext } from "../Context/CrankContext";

import CrankSvg from '../../Assets/Svg/CrankSvg.svg'

// var stylingObject = {
//     img: {
//         animation: `rotation 8s infinite linear`
//   }
// }
  

const Crank = () => {
   const { crankRpm, IncreaseCadance, DecreaseCadance } = useContext(CrankContext);

   const rpm = (crankRpm / 60)

//    var css = `body { background: ${crankRpm} }`

   var stylingObject = {
    img: {
        animation: `rotation ${rpm}s infinite linear`
    }
  }

   return (
       <div>
           <img className="CrankSvg" src={CrankSvg} alt="Crank" height={180} width={180} style={stylingObject.img} />
           <div data-testid="Display_Cadance">Cadance: {crankRpm}rpm</div>
           <div>
               <button className="DecreaseCadance" data-testid='DecreaseCadance' onClick={DecreaseCadance}>-</button>
               <button className="IncreaseCadance" data-testid='IncreaseCadance' onClick={IncreaseCadance}>+</button>
           </div>
       </div>
   )
}

export default Crank;