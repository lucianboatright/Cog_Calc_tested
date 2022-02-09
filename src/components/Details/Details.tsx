import React, {useState} from "react";
import { FrontCog } from "../Cogs/FrontCogs";
import { RearCog } from "../Cogs/RearCog";


export const RearBasicCogs = () => <RearCog onRearShift={rearCog => rearCog} />
export const FrontBasicCogs = () => <FrontCog onFrontShift={frontCog => frontCog} />


export function Details() {
    // const rearCog
    // const [frontCog, setFrontCog] = useState(50)


    const grearRatio = (frontCog / rearCog)

    return (
        <>
            <div>
                <div>Details</div>
                <div>Rear Cog: {rearCog} - Front Cog: {frontCog}</div>
                <div>Gear Ratio: {grearRatio}</div>
            </div>
        </>
    )
}