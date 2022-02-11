import React, { useContext } from "react";
import { WheelContext } from "../Context/WheellContext";


const WheelSizeSelector = () => {
    const { wheel, changeWheel } = useContext(WheelContext)

    return (
        <div>
            <div>Wheel Size</div>
            <select
                name="wheel"
                id="wheel"
                value={wheel}
                onChange={e => setwheel(e.target.value)}
            >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}

export default WheelSizeSelector;