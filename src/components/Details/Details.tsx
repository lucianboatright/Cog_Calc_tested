import React, { useContext } from 'react';
import { FrontCogContext } from '../Context/FrontCogContext';
import { RearCogContext } from '../Context/RearCogContext';
import { CrankContext } from '../Context/CrankContext';



const Detail = () => {
    const {frontCog} = useContext(FrontCogContext)
    const {rearCog} = useContext(RearCogContext)
    const {crankRpm} = useContext(CrankContext)

    const GearRatio = (frontCog / rearCog).toPrecision(3)

    return (
        <div className='DatailsSection'>
            <div className='DetailsTitle' data-testid={'DetailsTitle'} >Details</div>
            <div className='Cogs_Display'><span data-testid="Details_Cogs_Rear">Rear Cog: {rearCog} - </span><span data-testid="Details_Cogs_Front">Front Cog: {frontCog}</span></div>
            <div className='Gear_ratio' data-testid="Gear_ratio">Gear Ratios {GearRatio}</div>
            <div className='Cadance_rpm_Datails' data-testid="Cadance_rpm_Datails">Cadance: {crankRpm}rpm </div>
        </div>
    )
}

export default Detail;