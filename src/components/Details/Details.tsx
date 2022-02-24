import React, { useContext, FC, useState } from 'react';
import { FrontCogContext } from '../Context/FrontCogContext';
import { RearCogContext } from '../Context/RearCogContext';
import { CrankContext } from '../Context/CrankContext';


const Detail = ({ tyreText, tyreTextValue, wheelSize, wheelSizeValue }: any) => {
    const {frontCog} = useContext(FrontCogContext)
    const {rearCog} = useContext(RearCogContext)
    const {crankRpm} = useContext(CrankContext)

    
    const tyreTextCondition = tyreText ? tyreText : "Select Tyre Value"
    const wheelTextCondition = wheelSize ? wheelSize : "Select Wheel Size"

    const tyreValue = tyreTextValue ? tyreTextValue : 0
    const wheelValue = wheelSizeValue ? wheelSizeValue : 0

    const GearRatio = (Number(frontCog) / Number(rearCog)).toFixed(2)
    const TotalWheelDiameter = (Number(wheelValue) + (Number(tyreValue) * 2))
    const WheelCircumferance = ((TotalWheelDiameter * Math.PI) / 1000)
    const Speed = (WheelCircumferance * parseFloat(GearRatio) * crankRpm * 60) / 1000
    const GearInches = ((Number(GearRatio) * WheelCircumferance) / 100)

    return (
        <div className='DatailsSection'>
            <div className='DetailsTitle' data-testid={'DetailsTitle'} >Details</div>
            <div className='Cogs_Display'><span data-testid="Details_Cogs_Rear">Rear Cog<span className='Red_semi'> :</span> {rearCog} - </span><span data-testid="Details_Cogs_Front">Front Cog<span className='Red_semi'> :</span> {frontCog}</span></div>
            <div className="Wheel_size_Details">Wheel Size<span className='Red_semi'> :</span> {wheelTextCondition}</div>
            <div className="Tyre_size_Details">Tyre Size<span className='Red_semi'> :</span> {tyreTextCondition}</div>
            <div className='Gear_ratio' data-testid="Wheel_circ">Wheel Cuircumferance<span className='Red_semi'> :</span> {WheelCircumferance.toFixed(2)} Meters</div>
            <div className='Gear_ratio' data-testid="Gear_ratio">Gear Ratios<span className='Red_semi'> :</span> {GearRatio}</div>
            <div className='Gear_ratio' data-testid="Gear_Inches">Gear Inches<span className='Red_semi'> :</span> {GearInches.toFixed(2)}</div>
            <div className='Cadance_rpm_Datails' data-testid="Cadance_rpm_Datails">Cadance<span className='Red_semi'> :</span> {crankRpm}rpm </div>
            <div className='Cadance_rpm_Datails' data-testid="Speed_Datails">Speed<span className='Red_semi'> :</span> {Speed.toFixed(2)} Km/h </div>
        </div>
    )
}

export default Detail;