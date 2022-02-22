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
    const WheelCircumferance = ((TotalWheelDiameter * Math.PI) / 10)
    const Speed = (WheelCircumferance * parseFloat(GearRatio) * crankRpm * 60) / 100000
    const GearInches = ((Number(GearRatio) * WheelCircumferance) / 100)

    // console.log("Gear Ratio", GearRatio)
    // console.log("Gear Inches", GearInches.toFixed(2))
    // console.log("total wheel diameter", TotalWheelDiameter)
    // console.log("Wheel cuircumferance", WheelCircumferance.toFixed(2))
    // console.log("Speed", Speed)

    return (
        <div className='DatailsSection'>
            <div className='DetailsTitle' data-testid={'DetailsTitle'} >Details</div>
            <div className='Cogs_Display'><span data-testid="Details_Cogs_Rear">Rear Cog: {rearCog} - </span><span data-testid="Details_Cogs_Front">Front Cog: {frontCog}</span></div>
            <div className="Wheel_size_Details">Wheel Size: {wheelTextCondition}</div>
            <div className="Tyre_size_Details">Tyre Size: {tyreTextCondition}</div>
            <div className='Gear_ratio' data-testid="Gear_ratio">Wheel Cuircumferance: {WheelCircumferance.toFixed(2)} Meters</div>
            <div className='Gear_ratio' data-testid="Gear_ratio">Gear Ratios: {GearRatio}</div>
            <div className='Gear_ratio' data-testid="Gear_ratio">Gear Inches: {GearInches.toFixed(2)}</div>
            <div className='Cadance_rpm_Datails' data-testid="Cadance_rpm_Datails">Cadance: {crankRpm}rpm </div>
            <div className='Cadance_rpm_Datails' data-testid="Cadance_rpm_Datails">Speed: {Speed.toFixed(2)} Km/h </div>
        </div>
    )
}

export default Detail;