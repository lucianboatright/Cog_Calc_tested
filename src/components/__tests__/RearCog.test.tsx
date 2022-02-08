import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
// import {RearCog} from '../Cogs/RearCog'
import { RearBasicCogs } from '../Cogs/DriveTrain'

it.todo('shoudl start with cound of 15')

it.todo('should increse by 1 when shifting up')

it.todo('shoudl decrease by 1 when shifted down')

it.todo('should not decrease less than 1')

it.todo('should no increase past 46')

let rearBasicCogs
let rearIncromentCount
let readDecrementCount

beforeEach(() => {
    render(<RearBasicCogs />)
    rearBasicCogs = screen.getByRole('spinbutton')
    rearIncromentCount = screen.getByRole('button', { name: '+'})
    readDecrementCount = screen.getByRole('button', { name: '-'})
})

it('should start with state of 15', () => {
    expect(rearBasicCogs).toHaveValue(15)
})

// it('should increase by 1 when shifted up', () => {

// })