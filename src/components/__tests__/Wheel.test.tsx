import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

it.todo('should test that the components mounts')

it.todo('should start with wheel size 700c')

it.todo('will be able to select between 700c 29,27.5,26,24,20,16')
// Wheel Sizes convert into mm
// 28 = 635
// 27 = 630
// 29/700 = 622
// 27.5/650B = 584
// 650C = 571
// 26 = 559
// 24E6 = 547
// 24 BMX = 507
// 20 = 406
// 16 = 349

// Tyre Sizes convert inch into mm
// 1.00 = 	25.40 
// 1.25 = 	31.75 
// 1.35 = 	34.29 
// 1.40 = 	35.56 
// 1.50 = 	38.10 
// 1.75 = 	44.45 
// 1.90 = 	48.26 
// 1.95 = 	49.50 
// 2.00 = 	50.80 
// 2.10 = 	53.34 
// 2.125 = 	54.00 
// 2.20 = 	55.88 
// 2.25 = 	57.15 
// 2.30 = 	58.42 
// 2.35 = 	59.69 
// 2.40 = 	60.96 
// 2.50 = 	63.50 
// 2.60 = 	66.04 
// 2.75 = 	69.85 
// 2.80 = 	71.12 
// 3.00 = 	76.20 
// 3.80 = 	96.52 
// 4.00 = 	101.60
// 4.25 = 	107.95
// 4.50 = 	114.30
// 4.60 = 	116.84
// 4.70 = 	119.38
// 4.80 = 	121.92
// 4.90 = 	124.46

it.todo('should start on tyre 28c')

it.todo('will be able to select between 20-48c ')

it.todo('should change on selected wheel size and tyre size')


beforeEach(() => {
    render(<App />)
})

test('should mount component', () => {
    const Wheel = screen.getByTestId(/Wheel_Selector/i)
    expect(Wheel).toHaveTextContent('Wheel: 700c')
})