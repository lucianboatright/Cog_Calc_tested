import React, { useState, FC, createContext } from 'react'

interface WheelContextState {
    wheel: number;
    changeWheel: () => void;
}

const WheelContextDefaultValues: WheelContextState = {
    wheel: 622,
    changeWheel: () => {},
}

export const WheelContext = createContext<WheelContextState>(WheelContextDefaultValues)

const WheelProvider: FC = ({ children }) => {
    const [wheel, setWheel] = useState<number>(WheelContextDefaultValues.wheel)

    return (
        <WheelContext.Provider
            value={{
                wheel,
                changeWheel,
            }}
        >
            {children}
        </WheelContext.Provider>
    )
}

export default WheelProvider;