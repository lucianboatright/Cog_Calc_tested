import { render, screen } from "@testing-library/react";
import App from '../../App';
import userEvent from '@testing-library/user-event';

it.todo('shoudl start with cound of 15')

it.todo('should increse by 1 when shifting up')

it.todo('shoudl decrease by 1 when shifted down')

it.todo('should not decrease less than 1')

it.todo('should no increase past 46')

beforeEach(() => {
    render(<App />)
    // rearBasicCogs = screen.getByRole('spinbutton')
    // const rearIncromentCount = screen.getByRole('button', { name: '+'})
    // const readDecrementCount = screen.getByRole('button', { name: '-'})
})

// test('renders component', () => {
//   const linkElement = screen.getByText(/Rear Cog/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('shoudl render component', () => {
  const linkElement = screen.getByTestId(/RearCogComponent/i);
  expect(linkElement).toHaveTextContent('Rear Cog')
});

test('rear cog component should start with 15', () => {
  const linkElement = screen.getByTestId(/RearCogComponent/i);
  expect(linkElement).toHaveTextContent('15')
});

test('rear cog increaases by 1 on shift up', () => {
  const linkElement = screen.getByTestId(/RearCogComponent/i);
  const rearIncromentCount = screen.getByTestId(/rearShiftUp/i)
  userEvent.click(rearIncromentCount)
  expect(linkElement).toHaveTextContent('16')
});

test('rear cog increaases to max 46 on shift up', () => {
  const linkElement = screen.getByTestId(/RearCogComponent/i);
  const rearIncromentCount = screen.getByTestId(/rearShiftUp/i)
  for(let i = 0; i < 40; i++) {
    userEvent.click(rearIncromentCount)
  }
  expect(linkElement).toHaveTextContent('46')
});

test('rear cog with decrease by 1 on down shift', () => {
    const linkElement = screen.getByTestId(/RearCogComponent/i);
    const rearIncromentCount = screen.getByTestId(/rearShiftDown/i)
    userEvent.click(rearIncromentCount)
    expect(linkElement).toHaveTextContent('14')
})

test('rear cog increaases to max 46 on shift up', () => {
    const linkElement = screen.getByTestId(/RearCogComponent/i);
    const rearIncromentCount = screen.getByTestId(/rearShiftDown/i)
    for(let i = 0; i < 40; i++) {
      userEvent.click(rearIncromentCount)
    }
    expect(linkElement).toHaveTextContent('9')
});
