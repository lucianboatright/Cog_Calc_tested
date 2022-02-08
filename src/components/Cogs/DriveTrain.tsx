import React, { useState } from 'react'
import { FrontCog } from './FrontCogs'
import { RearCog } from './RearCog'

export const RearBasicCogs = () => <RearCog onRearShift={rearCog => rearCog} />
export const FrontBasicCogs = () => <FrontCog onFrontShift={frontCog => frontCog} />

export function DriveTrain() {
    const [rearCog, setRearCog] = useState(15)
    const [frontCog, setFrontCog] = useState(50)
    return (
        <>
            <div>
                <div>
                    <p>Rear Cog: {rearCog}</p>
                    <p>Front Cog: {frontCog}</p>
                </div>
                <div>
                    <RearCog 
                        onRearShift={rearCog => {
                            setRearCog(rearCog)
                        }}
                    /> 
                    <FrontCog 
                        onFrontShift={frontCog => {
                            setFrontCog(frontCog)
                        }}
                    />
                </div>
            </div>
        </>
    )
}