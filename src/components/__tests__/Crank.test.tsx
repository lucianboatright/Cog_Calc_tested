import { fireEvent, render, screen } from "@testing-library/react";
import App from '../../App';
import userEvent from '@testing-library/user-event';

it.todo('should render the component on page')
it.todo('should start with state of 90rpm')
it.todo('should be able to incroment by 1')
it.todo('should be able to decroment by 1')
it.todo('should not go below 30rpm on decrease')
it.todo('should not go above 220rpm on increase')

beforeEach(() => {
    render(<App />)
})

test('should show rpm starting at 90rpm', () => {
    const Display_Cadance = screen.getByTestId(/Display_Cadance/i)
    expect(Display_Cadance).toHaveTextContent('Cadance : 90rpm')
})

test('should increase RPM by one at a time', () => {
    const Display_Cadance = screen.getByTestId(/Display_Cadance/i)

    const IncreaseCadance = screen.getByTestId(/IncreaseCadance/i)
    userEvent.click(IncreaseCadance)

    expect(Display_Cadance).toHaveTextContent('Cadance : 91rpm')

})

test('should decrese RPM by one at a time', () => {
    const Display_Cadance = screen.getByTestId(/Display_Cadance/i)

    const DecreaseCadance = screen.getByTestId(/DecreaseCadance/i)
    userEvent.click(DecreaseCadance)

    expect(Display_Cadance).toHaveTextContent('Cadance : 89rpm')
})

test('should increase RPM to limit of 220rpm', () => {
    const Display_Cadance = screen.getByTestId(/Display_Cadance/i)

    const IncreaseCadance = screen.getByTestId(/IncreaseCadance/i)
    for(let i = 0; i < 200; i++) {
        userEvent.click(IncreaseCadance)
    }

    expect(Display_Cadance).toHaveTextContent('Cadance : 220rpm')
})

test('should decrese RPM by one at a time', () => {
    const Display_Cadance = screen.getByTestId(/Display_Cadance/i)

    const DecreaseCadance = screen.getByTestId(/DecreaseCadance/i)
    for(let i = 0; i < 50; i++) {
        userEvent.click(DecreaseCadance)
    }

    expect(Display_Cadance).toHaveTextContent('Cadance : 40rpm')
})

