import React, { useContext } from 'react';
import { FrontCogContext } from '../Context/frontCogContext';
import { RearCogContext } from '../Context/rearCogContext';



const Detail = () => {
    const {frontCog} = useContext(FrontCogContext)
    const {rearCog} = useContext(RearCogContext)

    return (
        <div>
            <div data-testid={'DetailsTitle'} >Details</div>
            <div><span data-testid="Details_Cogs_Rear">Rear Cog: {rearCog} - </span><span data-testid="Details_Cogs_Front">Front Cog: {frontCog}</span></div>
        </div>
    )
}

export default Detail;