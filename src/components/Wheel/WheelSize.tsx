import React, { useContext } from "react";
import { WheelContext } from "../Context/WheellContext";


const WheelSizeSelector = () => {
    const { wheel } = useContext(WheelContext)

    return (
        <div>
            <div>Wheel Size</div>
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}

export default WheelSizeSelector;