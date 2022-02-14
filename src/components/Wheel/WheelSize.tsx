import React, { useState } from "react";
import DropDown from "../Context/WheellContext";

const WheelMenue: React.FC = (): JSX.Element => {
    const [wheelDropDown, setDropDown] = useState<boolean>(false);
    const [selectWheel, setSelectWheel] = useState<string>("");
    const wheelSizes = () => {
        return ["28 Inch", "27 Inch", "29 Inch / 700c", "27.5 Inch / 650b", "26 Inch", "24 Inch", "16 Inch"];
    };

    const toggleDropDown = () => {
        setDropDown(!wheelDropDown);
    };

    const dismissHAndler = (event: React.FocusEvent<HTMLButtonElement>): void => {
        if (event.currentTarget === event.target) {
            setDropDown(false);
        }
    }

    const wheelSelection = (wheel: string): void => {
        setSelectWheel(wheel);
    }

    return (
        <>
        <div>
            <div>Wheel Selector</div>
            <div>
                {selectWheel ? `${selectWheel}` : "Plese select a wheel"}
            </div>
            <button
                className={wheelDropDown ? "active" : undefined}
                onClick={(e: React.FocusEvent<HTMLButtonElement>): void => 
                    dismissHAndler(e)
                }
            >
                <div>{selectWheel ? "Select: " + selectWheel : "Select ..."}</div>
                {wheelDropDown && (
                    <DropDown 
                        wheelSizes={wheelSizes()}
                        wheelDropDown={false}
                        toggleDropDown={(): void => toggleDropDown()}
                        wheelSelection={wheelSelection}
                    />
                )}
            </button>
        </div>
        </>
    )
}

export default WheelMenue;



// import React, { useContext } from "react";
// import { WheelContext } from "../Context/WheellContext";


// const WheelSizeSelector = () => {
//     const { wheel, changeWheel } = useContext(WheelContext)

//     return (
//         <div>
//             <div>Wheel Size</div>
//             <select
//                 name="wheel"
//                 id="wheel"
//                 value={wheel}
//                 onChange={e => setwheel(e.target.value)}
//             >
//                 <option value="volvo">Volvo</option>
//                 <option value="saab">Saab</option>
//                 <option value="opel">Opel</option>
//                 <option value="audi">Audi</option>
//             </select>
//         </div>
//     )
// }

// export default WheelSizeSelector;