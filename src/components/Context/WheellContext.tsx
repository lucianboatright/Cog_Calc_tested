
import React, { useEffect, useState } from "react";

type DropDownProps = {
    wheelSizes: string[];
    wheelDropDown: boolean;
    toggleDropDown: Function;
    wheelSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
    wheelSizes,
    wheelSelection,
}: DropDownProps) : JSX.Element => {
    const [wheelDropDown, setWheelDropDown] = useState<boolean>(false)

    const onClickHandeler = (city: string): void => {
        wheelSelection(wheelSizes);
    };

    useEffect(() => {
        setWheelDropDown(wheelDropDown);
    }, [wheelDropDown]);

    return (
        <>
        <div>
            <div>Wheel Selector</div>
            <div className={wheelDropDown ? 'dropdown' : 'dropdown active'} >
                {wheelSizes.map(
                    (wheel: string, index: number): JSX.Element => {
                        return (
                            <p
                                key={index}
                                onClick={(): void => {
                                    onClickHandeler(wheel);
                                }}
                            >

                            </p>
                        )
                    }
                )}
            </div>
        </div>
        </>
    )
}

export default DropDown;

// import React, { useState, FC, createContext } from 'react'

// interface WheelContextState {
//     wheel: number;
//     changeWheel: () => void;
// }

// const WheelContextDefaultValues: WheelContextState = {
//     wheel: 622,
//     changeWheel: () => {},
// }

// export const WheelContext = createContext<WheelContextState>(WheelContextDefaultValues)

// const WheelProvider: FC = ({ children }) => {
//     const [wheel, setWheel] = useState<number>(WheelContextDefaultValues.wheel)

//     const changeWheel = () => setWheel()

//     return (
//         <WheelContext.Provider
//             value={{
//                 wheel,
//                 changeWheel,
//             }}
//         >
//             {children}
//         </WheelContext.Provider>
//     )
// }

// export default WheelProvider;