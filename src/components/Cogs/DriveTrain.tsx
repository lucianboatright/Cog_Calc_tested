import React, { useState } from 'react'
import { FrontCog } from './FrontCogs'
import { RearCog } from './RearCog'
import './DriveTrainStyleing.css'

export const RearBasicCogs = () => <RearCog onRearShift={rearCog => rearCog} />
export const FrontBasicCogs = () => <FrontCog onFrontShift={frontCog => frontCog} />

export function DriveTrain() {
    const [rearCog, setRearCog] = useState(15)
    const [frontCog, setFrontCog] = useState(50)
    return (
        <>
            <div className='drive-train'>
                <div>
                    <div className='cogs-display'>
                        <p>Rear Cog: {rearCog}</p>
                    </div>
                    <div className='cogs-display'>
                        <p>Front Cog: {frontCog}</p>
                    </div>
                </div>
                <div>
                    <div className='shifters'>
                        <RearCog 
                            onRearShift={rearCog => {
                                setRearCog(rearCog)
                            }}
                        /> 
                    </div>
                    <div className='shifters'>
                        <FrontCog 
                            onFrontShift={frontCog => {
                                setFrontCog(frontCog)
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}