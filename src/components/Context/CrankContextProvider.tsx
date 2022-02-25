import React, { useState, FC, createContext } from 'react'

interface CrankState {
    crankRpm: number;
    IncreaseCadance: () => void;
    DecreaseCadance: () => void;
    resetCadance: () => void;
}

const CrankContextDefaultState: CrankState = {
    crankRpm: 90,
    IncreaseCadance: () => {},
    DecreaseCadance: () => {},
    resetCadance: () => {},
}

export const CrankContext = createContext<CrankState>(CrankContextDefaultState)

const CrankProvider: FC = ({ children }) => {
    const [crankRpm, setCrank] = useState<number>(CrankContextDefaultState.crankRpm);

    const IncreaseCadance = () => (crankRpm < 220 ? setCrank(crankRpm + 1) : setCrank(crankRpm))
    const DecreaseCadance = () => (crankRpm > 30 ? setCrank(crankRpm -1) : setCrank(crankRpm))
    const resetCadance = () => setCrank(90)

    return (
        <CrankContext.Provider
            value={{
                crankRpm,
                IncreaseCadance,
                DecreaseCadance,
                resetCadance,
            }}
        >
            {children}
        </CrankContext.Provider>
    )
}

export default CrankProvider;
