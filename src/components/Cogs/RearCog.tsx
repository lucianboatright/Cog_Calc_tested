import React, {useState} from 'react';

// define types of props being passed in
export type RearCogProps = {
    min?: number,
    max?: number,
    rearIncroment?: number,
    readDecrement?: number,
    onRearShift: (count: number ) => void
} & React.HTMLAttributes<HTMLDivElement>

// build Component and first set limits or amounts 
export function RearCog({
    min = 1,
    max = 46,
    rearIncroment = 1,
    readDecrement = 1,
    onRearShift
}: RearCogProps) {

    const [rearCog, setRearCog] = useState(15)

    function handleShiftUp() {
        if (rearCog < max) {
            setRearCog(rearCog + rearIncroment)
            onRearShift(rearCog + rearIncroment)
        }
    }

    function handleShiftDown() {
        if (rearCog > min) {
            setRearCog(rearCog - readDecrement)
            onRearShift(rearCog - readDecrement)
        }
    }

    function handleInputShift(e) {
        setRearCog(e.target.valueAsNumber)
        onRearShift(e.target.valueAsNumber)
    }
    
    return (
        <div>
            <div>Rear Cog</div>
            <button onClick={handleShiftUp}>+</button>
            <button onClick={handleShiftDown}>-</button>
        </div>
    )

}