import React, { useContext, FC } from 'react';
import { FrontCogContext } from '../Context/FrontCogContext';
import { RearCogContext } from '../Context/RearCogContext';
import { CrankContext } from '../Context/CrankContext';


const Detail = ({ tyreText, tyreTextValue, wheelSize, wheelSizeValue }: any) => {
    const {frontCog} = useContext(FrontCogContext)
    const {rearCog} = useContext(RearCogContext)
    const {crankRpm} = useContext(CrankContext)
    const tyreValue = tyreTextValue
    const wheelValue = wheelSizeValue


    const GearRatio = (frontCog / rearCog).toPrecision(3)
    const TotalWheelDiameter = (wheelValue + (tyreValue * 2))
    const WheelCircumferance = (TotalWheelDiameter * Math.PI)
    const Speed = (WheelCircumferance * parseFloat(GearRatio) * crankRpm * 60)

    console.log("Gear Ratio", GearRatio)
    console.log("total wheel diameter", TotalWheelDiameter)
    console.log("Wheel cuircumferance", WheelCircumferance)
    console.log("Speed", Speed)

    return (
        <div className='DatailsSection'>
            <div className='DetailsTitle' data-testid={'DetailsTitle'} >Details</div>
            <div className='Cogs_Display'><span data-testid="Details_Cogs_Rear">Rear Cog: {rearCog} - </span><span data-testid="Details_Cogs_Front">Front Cog: {frontCog}</span></div>
            <div className='Gear_ratio' data-testid="Gear_ratio">Gear Ratios {GearRatio}</div>
            <div className='Cadance_rpm_Datails' data-testid="Cadance_rpm_Datails">Cadance: {crankRpm}rpm </div>
            <div className="Wheel_size_Details">Wheel Size: {wheelSize ? wheelSize : "Select Wheel"}</div>
            <div className="Tyre_size_Details">Tyre Size: {tyreText ? tyreText : "Select Tyre"}</div>
        </div>
    )
}

export default Detail;