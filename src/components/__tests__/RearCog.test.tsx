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

it('should increase by 1 when shifted up', () => {
    expect(rearBasicCogs).toHaveValue(15)
    userEvent.click(rearIncromentCount)
    expect(rearBasicCogs).toHaveValue(16)
})

it('should start with 15 but decres by one on shifting down', () => {
    expect(rearBasicCogs).toHaveValue(15)
    userEvent.click(readDecrementCount)
    expect(rearBasicCogs).toHaveValue(14)
})

it('should not increase past 46 on up shifting', () => {
    expect(rearBasicCogs).toHaveValue(15)
    for(let i = 0; i < 40; i++) {
        userEvent.click(rearIncromentCount)
    }
    expect(rearBasicCogs).toHaveValue(46)
})

it('should not decrease past 1 on down shifting', () => {
    expect(rearBasicCogs).toHaveValue(15)
    for(let i = 0; i < 18; i++) {
        userEvent.click(readDecrementCount)
    }
    expect(rearBasicCogs).toHaveValue(1)
})