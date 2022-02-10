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
    const Cadance_rpm = screen.getByTestId(/Cadance_rpm/i)
    expect(Cadance_rpm).toHaveTextContent('Gear Ratio: 90rpm')
})

test('should increase RPM by one at a time', () => {
    const Cadance_rpm = screen.getByTestId(/Cadance_rpm/i)

    const IncreaseCadance = screen.getByTestId(/IncreaseCadance/i)
    userEvent.click(IncreaseCadance)

    expect(Cadance_rpm).toHaveTextContent('91 rpm')

})

test('should decrese RPM by one at a time', () => {
    const Cadance_rpm = screen.getByTestId(/Cadance_rpm/i)

    const SlowCadance = screen.getByTestId(/SlowCadance/i)
    userEvent.click(SlowCadance)

    expect(Cadance_rpm).toHaveTextContent('89 rpm')
})

test('should increase RPM to limit of 220rpm', () => {
    const Cadance_rpm = screen.getByTestId(/Cadance_rpm/i)

    const IncreaseCadance = screen.getByTestId(/IncreaseCadance/i)
    for(let i = 0; i < 200; i++) {
        userEvent.click(IncreaseCadance)
    }

    expect(Cadance_rpm).toHaveTextContent('220 rpm')
})

test('should decrese RPM by one at a time', () => {
    const Cadance_rpm = screen.getByTestId(/Cadance_rpm/i)

    const SlowCadance = screen.getByTestId(/SlowCadance/i)
    for(let i = 0; i < 50; i++) {
        userEvent.click(SlowCadance)
    }

    expect(Cadance_rpm).toHaveTextContent('89 rpm')
})

