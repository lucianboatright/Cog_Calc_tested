import { fireEvent, render, screen } from "@testing-library/react";
import App from '../../App';
import userEvent from '@testing-library/user-event';

it.todo('should render the component')

it.todo('should start with showing front(50) and rear(15) on render')

it.todo('should incroment front and rear cog down by one')

it.todo('should incroment front and rear cog up by one')

it.todo('should increase only to 64')

it.todo('Should decrease only to 24')

it.todo('should show gear ratios starting with 3.33')

it.todo('should show rpm starting at 90rpm')

it.todo('should increase and decrese when input changed')


beforeEach(() => {
    render(<App />)
})

test('renders component', () => {
  const linkElement = screen.getByText(/Details/i);
  expect(linkElement).toBeInTheDocument();
});

test('shoudl render component', () => {
  const linkElement = screen.getByTestId(/DetailsTitle/i);
  expect(linkElement).toHaveTextContent('Details')
});

test('it shoudl show front and rear cogs starting at defaults', () => {
    const Details_cog_front = screen.getByTestId(/Details_Cogs_Front/i);
    const Details_cog_rear = screen.getByTestId(/Details_Cogs_Rear/i);
    expect(Details_cog_front).toHaveTextContent('50');
    expect(Details_cog_rear).toHaveTextContent('15');
})

test('it shoudl show front and rear cogs increase by one on clicking both shifters up', () => {
    const Details_cog_front = screen.getByTestId(/Details_Cogs_Front/i);
    const Details_cog_rear = screen.getByTestId(/Details_Cogs_Rear/i);

    const rearIncromentCount = screen.getByTestId(/rearShiftUp/i)
    userEvent.click(rearIncromentCount)
    const frontIncromentCount = screen.getByTestId(/frontShiftUp/i)
    userEvent.click(frontIncromentCount)

    expect(Details_cog_front).toHaveTextContent('51');
    expect(Details_cog_rear).toHaveTextContent('16');
})

test('it shoudl show front and rear cogs decreses by one on clicking both shifters down', () => {
    const Details_cog_front = screen.getByTestId(/Details_Cogs_Front/i);
    const Details_cog_rear = screen.getByTestId(/Details_Cogs_Rear/i);

    const rearDecromentCount = screen.getByTestId(/rearShiftDown/i)
    userEvent.click(rearDecromentCount)
    const frontDecromentCount = screen.getByTestId(/frontShiftDown/i)
    userEvent.click(frontDecromentCount)

    expect(Details_cog_front).toHaveTextContent('49');
    expect(Details_cog_rear).toHaveTextContent('14');
})

test('it shoudl show grear ratios starting at 3.33', () => {
    const Details_gear_ratio = screen.getByTestId(/Gear_ratio/i);
    expect(Details_gear_ratio).toHaveTextContent('3.33')
})
test('gear ratio changes on change of cogs 12/48 = 4.00 ', () => {
    const Details_gear_ratio = screen.getByTestId(/Gear_ratio/i);
    const rearDecromentCount = screen.getByTestId(/rearShiftDown/i)
    for(let i = 0; i < 3; i++) {
        userEvent.click(rearDecromentCount)
    }
    const frontDecromentCount = screen.getByTestId(/frontShiftDown/i)
    for(let i = 0; i < 2; i++) {
        userEvent.click(frontDecromentCount)
    }
    expect(Details_gear_ratio).toHaveTextContent('4.00')
})

test('should show rpm starting at 90rpm', () => {
    const Cadance_rpm = screen.getByTestId(/Cadance_rpm_Datails/i)
    expect(Cadance_rpm).toHaveTextContent('Cadance : 90rpm')
})

test('Wheel size shoudl start empty with "Select Wheel Size"', () => {
    const WheelSize = screen.getByTestId(/WheelSize_display_Details/i)
    expect(WheelSize).toHaveTextContent('Wheel Size : Select Wheel Size')
})

test('Wheel size shoudl start empty with "Select Wheel Size"', () => {
    const TyreSize = screen.getByTestId(/TyreSize_display/i)
    expect(TyreSize).toHaveTextContent('Tyre Size : Select Tyre Value')
})


test('rear:20 - cadance:100 - front:52 - wheel:29 - tyre:28', () => {
    const rearCogUp = screen.getByTestId(/rearShiftUp/i)
    const IncreaseCadance = screen.getByTestId(/IncreaseCadance/i)
    const frontShifterUp = screen.getByTestId(/FrontShiftUp/i)

    const WheelSize_Dropdown = screen.getByTestId(/WheelSize_Dropdown_Drawer/i)
    const WheelSize_Dropdown_Options = screen.getAllByTestId('WheelSize_Dropdown_Styled')
   
    const TyreSize_Dropdown = screen.getByTestId(/TyreSize_Dropdown_Drawer/i)
    const TyreSize_Dropdown_Options = screen.getAllByTestId('TyreSize_Dropdown_Styled')

    for(let i = 0; i < 2; i++) {
        userEvent.click(frontShifterUp)
    }
    for(let i = 0; i < 10; i++) {
        userEvent.click(IncreaseCadance)
    }
    for(let i = 0; i < 5; i++) {
        userEvent.click(rearCogUp)
    }

    fireEvent.click(WheelSize_Dropdown)
    fireEvent.click(WheelSize_Dropdown_Options[2])

    fireEvent.click(TyreSize_Dropdown)
    fireEvent.click(TyreSize_Dropdown_Options[5])

    const Details_Cogs_Rear = screen.getByTestId('Details_Cogs_Rear')
    const Details_Cogs_Front = screen.getByTestId('Details_Cogs_Front')
    const WheelDisplay = screen.getByTestId('WheelSize_display_Details')
    const TyreDisplay = screen.getByTestId('TyreSize_display')
    const Wheel_circ = screen.getByTestId('Wheel_circ')
    const Gear_ratio = screen.getByTestId('Gear_ratio')
    const Gear_Inches = screen.getByTestId('Gear_Inches')
    const Cadance_rpm_Datails = screen.getByTestId('Cadance_rpm_Datails')
    const Speed_Datails = screen.getByTestId('Speed_Datails')

    expect(Details_Cogs_Rear).toHaveTextContent("Rear Cog : 20 -");
    expect(Details_Cogs_Front).toHaveTextContent("Front Cog : 52");
    expect(WheelDisplay).toHaveTextContent("Wheel Size : 29 Inch / 700c");
    expect(TyreDisplay).toHaveTextContent('Tyre Size : 28mm')
    expect(Wheel_circ).toHaveTextContent('Wheel Cuircumferance : 2.13 Meters')
    expect(Gear_ratio).toHaveTextContent('Gear Ratios : 2.60')
    expect(Gear_Inches).toHaveTextContent('Gear Inches : 0.06')
    expect(Cadance_rpm_Datails).toHaveTextContent('Cadance : 100rpm')
    expect(Speed_Datails).toHaveTextContent('Speed : 33.23 Km/h')
})