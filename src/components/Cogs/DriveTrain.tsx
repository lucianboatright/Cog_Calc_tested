import React, { useState } from 'react'
import { RearCog } from './RearCog'

export const RearBasicCogs = () => <RearCog onRearShift={rearCog => rearCog} />

export function DriveTrain() {
    const [rearCog, setRearCog] = useState(15)
    return (
        <>
            <p>Rear Cog: {rearCog}</p>
            <RearCog 
                onRearShift={rearCog => {
                    setRearCog(rearCog)
                }}
            />
        </>
    )
}