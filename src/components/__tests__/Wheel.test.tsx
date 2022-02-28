import { cleanup, fireEvent, getAllByRole, getAllByTestId, getByTestId, render, screen } from "@testing-library/react";
import WheelIndex from '../../components/Wheel/WheelIndex'


it.todo('should test that the components mounts')

it.todo('should start with wheel size 700c')

it.todo('will be able to show selected 28, 27,29,26,650,24,16 ')

it.todo('will change selection from 27 inch to 24 inch')
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

const wheelOptions = [
    { text: "28 Inch", value: "635" },
    { text: "27 Inch", value: "630" },
    { text: "29 Inch / 700c", value: "622" },
    { text: "26 Inch", value: "559" },
    { text: "650b / 27.5 Inch", value: "584" },
    { text: "24 Inch", value: "559" },
    { text: "16 Inch", value: "349" }
];


beforeEach(() => {
    render(<WheelIndex childToParentWheelValue = {() => {}} childToParentWheel = {() => {}} />)
})

afterEach(() => {
    cleanup()
})

test('should mount component', () => {
    const wheelDisplay = screen.getByTestId(/WheelSize_Display/i)
    expect(wheelDisplay).toHaveTextContent('Wheel Size :')
})

test('should start with no value diosplayed', () => {
    const display = screen.getByTestId('WheelSize_Display')
    expect(display).toHaveTextContent("Wheel Size :")
})


test('should display 28 inch when selected (Top of dropdown) choice 1', () => {
    const dropdown = screen.getByTestId('WheelSize_Dropdown_Drawer')
    fireEvent.click(dropdown)
    const dropDownOptions = getAllByTestId(dropdown, 'WheelSize_Dropdown_Styled')
    fireEvent.click(dropDownOptions[0])

    const valueDisplay = screen.getByTestId('WheelSize_Display')
    expect(valueDisplay).toHaveTextContent("Wheel Size : 28 Inch");
})

test('should display selected option on change 27 inch choice 2', () => {
    const dropdown = screen.getByTestId('WheelSize_Dropdown_Drawer')
    fireEvent.click(dropdown)
    const dropDownOptions = getAllByTestId(dropdown, 'WheelSize_Dropdown_Styled')
    fireEvent.click(dropDownOptions[1])

    const valueDisplay = screen.getByTestId('WheelSize_Display')
    expect(valueDisplay).toHaveTextContent("Wheel Size : 27 Inch");
})

test('should display selected option on change 29 inch choice 3', () => {
    const dropdown = screen.getByTestId('WheelSize_Dropdown_Drawer')
    fireEvent.click(dropdown)
    const dropDownOptions = getAllByTestId(dropdown, 'WheelSize_Dropdown_Styled')
    fireEvent.click(dropDownOptions[2])

    const valueDisplay = screen.getByTestId('WheelSize_Display')
    expect(valueDisplay).toHaveTextContent("Wheel Size : 29 Inch / 700c");
})

test('should display 26 inch when selected (Bottom of dropdown choice 4)', () => {
    const dropdown = screen.getByTestId('WheelSize_Dropdown_Drawer')
    fireEvent.click(dropdown)
    const dropDownOptions = getAllByTestId(dropdown, 'WheelSize_Dropdown_Styled')
    fireEvent.click(dropDownOptions[3])

    const valueDisplay = screen.getByTestId('WheelSize_Display')
    expect(valueDisplay).toHaveTextContent("Wheel Size : 26 Inch");
})

test('should display 650b / 27.5 Inch" when selected (Bottom of dropdown) choice 5', () => {
    const dropdown = screen.getByTestId('WheelSize_Dropdown_Drawer')
    fireEvent.click(dropdown)
    const dropDownOptions = getAllByTestId(dropdown, 'WheelSize_Dropdown_Styled')
    fireEvent.click(dropDownOptions[4])

    const valueDisplay = screen.getByTestId('WheelSize_Display')
    expect(valueDisplay).toHaveTextContent("Wheel Size : 650b / 27.5 Inch");
})

test('should display 24 inch when selected (Bottom of dropdown)', () => {
    const dropdown = screen.getByTestId('WheelSize_Dropdown_Drawer')
    fireEvent.click(dropdown)
    const dropDownOptions = getAllByTestId(dropdown, 'WheelSize_Dropdown_Styled')
    fireEvent.click(dropDownOptions[5])

    const valueDisplay = screen.getByTestId('WheelSize_Display')
    expect(valueDisplay).toHaveTextContent("Wheel Size : 24 Inch");
})


test('should display 16 inch when selected (Bottom of dropdown)', () => {
    const dropdown = screen.getByTestId('WheelSize_Dropdown_Drawer')
    fireEvent.click(dropdown)
    const dropDownOptions = getAllByTestId(dropdown, 'WheelSize_Dropdown_Styled')
    fireEvent.click(dropDownOptions[6])

    const valueDisplay = screen.getByTestId('WheelSize_Display')
    expect(valueDisplay).toHaveTextContent("Wheel Size : 16 Inch");
})


test('should display 27 inch then 24 inch after change)', () => {
    const dropdown = screen.getByTestId('WheelSize_Dropdown_Drawer')
    const valueDisplay = screen.getByTestId('WheelSize_Display')
    fireEvent.click(dropdown)
    const dropDownOptions = getAllByTestId(dropdown, 'WheelSize_Dropdown_Styled')
    fireEvent.click(dropDownOptions[1])
    expect(valueDisplay).toHaveTextContent("Wheel Size : 27 Inch");
    fireEvent.click(dropDownOptions[5])
    expect(valueDisplay).toHaveTextContent("Wheel Size : 24 Inch");
})
