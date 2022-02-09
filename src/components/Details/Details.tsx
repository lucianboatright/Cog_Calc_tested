import React, { useContext } from 'react';
import { FrontCogContext } from '../Context/frontCogContext';
import { RearCogContext } from '../Context/rearCogContext';


const Detail = () => {
    const [frontCog] = useContext(FrontCogContext)
    const [rearCog] = useContext(RearCogContext)

    return (
        <div>
            <div>Details</div>
        </div>
    )
}