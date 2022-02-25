import React, { useState, FC, createContext } from 'react';

interface FrontCogContextState {
    frontCog: number;
    frontIncroment: () => void;
    frontDecroment: () => void;
    frontReset: () => void;
}

const frontCogContextDefaultValues: FrontCogContextState = {
    frontCog: 50,
    frontIncroment: () => {},
    frontDecroment: () => {},
    frontReset: () => {},
};

export const FrontCogContext = createContext<FrontCogContextState>(frontCogContextDefaultValues)

const FrontCogProvider: FC = ({ children }) => {
    const [frontCog, setFrontCog] = useState<number>(frontCogContextDefaultValues.frontCog);

    const frontIncroment = () => (frontCog < 64 ? setFrontCog(frontCog + 1) : setFrontCog(frontCog))
    const frontDecroment = () => (frontCog > 24 ? setFrontCog(frontCog - 1) : setFrontCog(frontCog))
    const frontReset = () => setFrontCog(50)

    return (
        <FrontCogContext.Provider
            value={{
                frontCog,
                frontDecroment,
                frontIncroment,
                frontReset,
            }}
        >
            {children}
        </FrontCogContext.Provider>
    )
}

export default FrontCogProvider;