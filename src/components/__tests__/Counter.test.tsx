import React from "react";
import { render } from "@testing-library/react";
import {RearCounter} from '../Counter';

test("testing component found on page", () => {
    const {getByTestId} = render(<RearCounter/>);
    const label = getByTestId('counter-label');
    expect(label).toBeInTheDocument();
    const counter = getByTestId('counter');
    expect(counter).toBeInTheDocument();
})

test("should render a counter with a custom label", () => {
    const {getByTestId} = render(<RearCounter label={`Current`} />);
    const label = getByTestId('counter-label');
    expect(label).toBeInTheDocument();
})

test("rear cog should start at 15", () => {
    const {getByTestId} = render(<RearCounter />);
    const counter = getByTestId('counter');
    expect(counter).toHaveTextContent('15');
});