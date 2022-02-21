import React, { useContext, FC } from 'react';
import { FrontCogContext } from '../Context/FrontCogContext';
import { RearCogContext } from '../Context/RearCogContext';
import { CrankContext } from '../Context/CrankContext';
// import { WheelContext }from '../Context/WheellContext'
// import { SelectContext } from '../Context/WheellContext';

// import Dropdown from './components/Wheel/WheelSize';
// import './components/Wheel/wheelstyles.css';


const Detail = ({ tyreSize, tyreText, wheelSize }) => {
    const {frontCog} = useContext(FrontCogContext)
    const {rearCog} = useContext(RearCogContext)
    const {crankRpm} = useContext(CrankContext)
    // const {value} = useContext(WheelContext)
    // const {useSelect} = useContext(SelectContext)
    // const {state} = useContext(FormContext)

    // const [value, setValue] = useState<string>("");

    const GearRatio = (frontCog / rearCog).toPrecision(3)

    return (
        <div className='DatailsSection'>
            <div className='DetailsTitle' data-testid={'DetailsTitle'} >Details</div>
            <div className='Cogs_Display'><span data-testid="Details_Cogs_Rear">Rear Cog: {rearCog} - </span><span data-testid="Details_Cogs_Front">Front Cog: {frontCog}</span></div>
            <div className='Gear_ratio' data-testid="Gear_ratio">Gear Ratios {GearRatio}</div>
            <div className='Cadance_rpm_Datails' data-testid="Cadance_rpm_Datails">Cadance: {crankRpm}rpm </div>
            <div className="Wheel_size_Details">Wheel Size: {wheelSize}</div>
            <div className="Tyre_size_Details">Tyre Size: {tyreText}</div>
        </div>
    )
}

export default Detail;