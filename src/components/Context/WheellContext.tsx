import React, { useState, FC, createContext } from 'react'

interface WheelContextState {
    wheel: number;
}

const WheelContextDefaultValues: WheelContextState = {
    wheel: 622,
}

export const WheelContext = createContext<WheelContextState>(WheelContextDefaultValues)

const WheelProvider: FC = ({ children }) => {
    const [wheel, setWheel] = useState<number>(WheelContextDefaultValues.wheel)

    return (
        <WheelContext.Provider
            value={{
                wheel,
            }}
        >
            {children}
        </WheelContext.Provider>
    )
}

export default WheelProvider;