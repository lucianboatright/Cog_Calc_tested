import React, { ChangeEvent, useState } from 'react';


export type FrontCogProps = {
    min?: number,
    max?: number,
    frontIncroment?: number,
    frontDecrement?: number,
    onFrontShift: (frontCog: number ) => void
} & React.HtmlHTMLAttributes<HTMLDivElement>

export function FrontCog({
    min = 24,
    max = 64,
    frontIncroment = 1,
    frontDecrement = 1,
    onFrontShift
}: FrontCogProps) {

    const [frontCog, setFrontCog] = useState(50)

    function handleShiftUp() {
        if (frontCog < max) {
            setFrontCog(frontCog + frontIncroment)
            onFrontShift(frontCog + frontIncroment)
        }
    }

    function handleShiftDown() {
        if(frontCog > min) {
            setFrontCog(frontCog - frontDecrement)
            onFrontShift(frontCog - frontDecrement)
        }
    }

    let handleInputShift = (event: ChangeEvent<HTMLInputElement>) => {
        setFrontCog(event.currentTarget.valueAsNumber)
        onFrontShift(event.currentTarget.valueAsNumber)
    }

    return (
        <div data-testid={'frontCog'}>
            <button onClick={handleShiftUp}>+</button>
            <button onClick={handleShiftDown}>-</button>
            <input type='number' min={min} max={max} value={frontCog} onChange={(e) => handleInputShift(e)}></input>
        </div>
    )
}