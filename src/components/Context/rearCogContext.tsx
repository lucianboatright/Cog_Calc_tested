import React, { useState, FC, createContext } from 'react';


interface RearCogContextState {
    rearCog: number;
    rearIncroment: () => void;
    rearDecroment: () => void;
}

const rearCogContextDefaultValues: RearCogContextState = {
    rearCog: 15,
    rearIncroment: () => {},
    rearDecroment: () => {},
};

export const RearCogContext = createContext<RearCogContextState>(rearCogContextDefaultValues);

const RearCogProvider: FC = ({ children }) => {
    const [rearCog, setRearCog] = useState<number>(rearCogContextDefaultValues.rearCog);

    const rearIncroment = () => setRearCog(rearCog + 1)
    const rearDecroment = () => setRearCog(rearCog - 1)

    return (
        <RearCogContext.Provider
            value={{
                rearCog,
                rearDecroment,
                rearIncroment,
            }}
        >
            {children}
        </RearCogContext.Provider>
    )
};

export default RearCogProvider;