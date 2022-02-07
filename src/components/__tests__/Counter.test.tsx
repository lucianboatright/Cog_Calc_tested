import React from "react";
import { fireEvent, render } from "@testing-library/react";
import {RearCounter} from '../Cogs/RearCog';

test("testing component found on page", () => {
    const {getByTestId} = render(<RearCounter count={0}/>);
    const label = getByTestId('rear-counter-label');
    expect(label).toBeInTheDocument();
    const counter = getByTestId('rear-shifter');
    expect(counter).toBeInTheDocument();
})

test("should render a counter with a custom label", () => {
    const {getByTestId} = render(<RearCounter label={`Current`} count={0}/>);
    const label = getByTestId('rear-counter-label');
    expect(label).toBeInTheDocument();
})

test("rear cog should start at 0", () => {
    const {getByTestId} = render(<RearCounter />);
    const counter = getByTestId('rear-shifter');
    expect(counter).toHaveTextContent('0');
});
test("rear cog should change to 15", () => {
    const {getByTestId} = render(<RearCounter start={15} />);
    const counter = getByTestId('rear-shifter');
    expect(counter).toHaveTextContent('15');
});
test('shift up should incroment up by one', () => {
    const { getByRole } = render(<RearCounter />);
    const counter = getByRole('rear-shifter');
    expect(counter).toHaveTextContent("0")
    fireEvent.click(counter)
    expect(counter).toHaveTextContent('1')
})
