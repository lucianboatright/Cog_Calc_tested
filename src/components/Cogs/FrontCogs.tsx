import React, { ChangeEvent, useState } from 'react';


export type FrontCogProps = {
    min?: number,
    max?: number,
    frontIncroment?: number,
    frontDecrement?: number,
    onFrontShift: (frontCog: number ) => void
} & React.HtmlHTMLAttributes<HTMLDivElement>

export function FrontCog({
    min = 26,
    max = 64,
    frontIncroment = 1,
    frontDecrement = 1,
    onFrontShift
}: FrontCogProps) {

    return (
        <div>
            <div>Front Cog</div>
        </div>
    )
}