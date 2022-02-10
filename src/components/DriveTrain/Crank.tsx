import React, {useContext} from "react";
import { CrankContext } from "../Context/CrankContext";

const Crank = () => {
   const { crankRpm, IncreaseCadance, DecreaseCadance } = useContext(CrankContext);

   return (
       <div>
           <div data-testid="Display_Cadance">Cadance: {crankRpm}rpm</div>
           <div>
               <button className="DecreaseCadance" data-testid='DecreaseCadance' onClick={DecreaseCadance}>-</button>
               <button className="IncreaseCadance" data-testid='IncreaseCadance' onClick={IncreaseCadance}>+</button>
           </div>
       </div>
   )
}

export default Crank;