import React, { useState, FC, createContext } from 'react'

interface CrankState {
    crankRpm: number;
    IncreaseCadance: () => void;
    DecreaseCadance: () => void;
}

const CrankContextDefaultState: CrankState = {
    crankRpm: 90,
    IncreaseCadance: () => {},
    DecreaseCadance: () => {},
}

export const CrankContext = createContext<CrankState>(CrankContextDefaultState)

const CrankProvider: FC = ({ children }) => {
    const [crankRpm, setCrank] = useState<number>(CrankContextDefaultState.crankRpm);

    const IncreaseCadance = () => (crankRpm < 220 ? setCrank(crankRpm + 1) : setCrank(crankRpm))
    const DecreaseCadance = () => (crankRpm > 30 ? setCrank(crankRpm -1) : setCrank(crankRpm))

    return (
        <CrankContext.Provider
            value={{
                crankRpm,
                IncreaseCadance,
                DecreaseCadance,
            }}
        >
            {children}
        </CrankContext.Provider>
    )
}

export default CrankProvider;
