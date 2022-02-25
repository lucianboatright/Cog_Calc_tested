import React, { useState, FC, createContext } from 'react';


interface RearCogContextState {
    rearCog: number;
    rearIncroment: () => void;
    rearDecroment: () => void;
    rearReset: () => void;
    textInput: (rearCog: number) => void;
}

const rearCogContextDefaultValues: RearCogContextState = {
    rearCog: 15,
    rearIncroment: () => {},
    rearDecroment: () => {},
    rearReset: () => {},
    textInput: () => {},
};

export const RearCogContext = createContext<RearCogContextState>(rearCogContextDefaultValues);

const RearCogProvider: FC = ({ children }) => {
    const [rearCog, setRearCog] = useState<number>(rearCogContextDefaultValues.rearCog);

    const rearIncroment = () => (rearCog < 46 ? setRearCog(rearCog + 1) : setRearCog(rearCog))
    const rearDecroment = () => rearCog > 9 ? setRearCog(rearCog - 1) : setRearCog(rearCog)
    const textInput = () => setRearCog(rearCog)
    const rearReset = () => setRearCog(15)

    return (
        <RearCogContext.Provider
            value={{
                rearCog,
                rearDecroment,
                rearIncroment,
                textInput,
                rearReset,
            }}
        >
            {children}
        </RearCogContext.Provider>
    )
};

export default RearCogProvider;