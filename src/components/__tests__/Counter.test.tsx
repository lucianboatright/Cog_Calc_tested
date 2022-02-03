import React from "react";
import { render } from "@testing-library/react";
import {Counter} from '../Counter';

test("testing component found on page", () => {
    const {getByTestId} = render(<Counter/>);
    const label = getByTestId('counter-label');
    expect(label).toBeInTheDocument();
    const counter = getByTestId('counter');
    expect(counter).toBeInTheDocument();
})

test("should render a counter with a custom label", () => {
    const {getByTestId} = render(<Counter label={`Current`} />);
    const label = getByTestId('counter-label');
    expect(label).toBeInTheDocument();
})