import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
// import {RearCog} from '../Cogs/RearCog'
import { BasicCogs } from '../Cogs/DriveTrain'

it.todo('shoudl start with cound of 15')

it.todo('should increse by 1 when shifting up')

it.todo('shoudl decrease by 1 when shifted down')

it.todo('should not decrease less than 1')

it.todo('should no increase past 46')

it('should start with state of 15', () => {
    render(<BasicCogs />)
    const rearCog = screen.getByRole('spinbutton')
    expect(rearCog).toHaveValue(15)
})