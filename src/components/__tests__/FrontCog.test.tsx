import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
// import {RearCog} from '../Cogs/RearCog'
import { FrontBasicCogs } from '../Cogs/DriveTrain'


it.todo('should start with state of 50')

it.todo('should increase by 1 on up shift')

it.todo('should decrease by 1 on down shift')

it.todo('should increase only to 64')

it.todo('Should decrease only to 24')


let frontBasicCogs
let frontIncromentCount
let frontDecrementCount

beforeEach(() => {
    render(<FrontBasicCogs />)
    frontBasicCogs = screen.getByRole('spinbutton')
    frontIncromentCount = screen.getByRole('button', { name: '+'})
    frontDecrementCount = screen.getByRole('button', { name: '-'})
})

it('should render with state of 50', () => {
    expect(FrontBasicCogs).toHaveValue(50)
})

it('should increment by 1 when shifted up', () => {
    expect(FrontBasicCogs).toHaveValue(50)
    userEvent.click(frontIncromentCount)
    expect(FrontBasicCogs).toHaveValue(51)
})

it('should decrea by 1 on shift down', () => {
    expect(FrontBasicCogs).toHaveValue(50)
    userEvent.click(frontDecrementCount)
    expect(FrontBasicCogs).toHaveValue(49)
})

it('shoudl not go smaller than 24 at the back', () => {
    expect(FrontBasicCogs).toHaveValue(50)
    for(let i = 0; i < 30; i++) {
        userEvent.click(frontDecrementCount)
    }
    expect(FrontBasicCogs).toHaveValue(24)
})

it('should shot at 64 on shifting up', () => {
    expect(FrontBasicCogs).toHaveValue(50)
    for(let i = 0; i < 17; i++) {
        userEvent.click(frontIncromentCount)
    }
    expect(FrontBasicCogs).toHaveValue(64)
})

