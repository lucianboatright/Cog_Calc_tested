import { fireEvent, render, screen } from "@testing-library/react";
import App from '../../App';
import userEvent from '@testing-library/user-event';

it.todo('should render the component')

it.todo('should start with showing front(50) and rear(15) on render')

it.todo('should incroment front and rear cog down by one')

it.todo('should incroment front and rear cog up by one')

it.todo('should show gear ratios starting with 3.33')

it.todo('should increase only to 64')

it.todo('Should decrease only to 24')


beforeEach(() => {
    render(<App />)
})

test('renders component', () => {
  const linkElement = screen.getByText(/Details/i);
  expect(linkElement).toBeInTheDocument();
});

test('shoudl render component', () => {
  const linkElement = screen.getByTestId(/Details/i);
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

    const rearIncromentCount = screen.getByTestId(/rearShiftDown/i)
    userEvent.click(rearIncromentCount)
    const frontIncromentCount = screen.getByTestId(/frontShiftDown/i)
    userEvent.click(frontIncromentCount)

    expect(Details_cog_front).toHaveTextContent('49');
    expect(Details_cog_rear).toHaveTextContent('14');
})

test('it shoudl show grear ratios starting at 3.33', () => {
    const Details_gear_ratio = screen.getByTestId(/Gear_ratio/i);
    expect(Details_gear_ratio).toHaveTextContent('3.33')
})