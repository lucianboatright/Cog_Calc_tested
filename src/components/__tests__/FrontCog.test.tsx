import { fireEvent, render, screen } from "@testing-library/react";
import App from '../../App';
import userEvent from '@testing-library/user-event';

it.todo('shoudl render the component')

it.todo('should start with state of 50')

it.todo('should increase by 1 on up shift')

it.todo('should decrease by 1 on down shift')

it.todo('should increase only to 64')

it.todo('Should decrease only to 24')


beforeEach(() => {
    render(<App />)
    // rearBasicCogs = screen.getByRole('spinbutton')
    // const rearIncromentCount = screen.getByRole('button', { name: '+'})
    // const readDecrementCount = screen.getByRole('button', { name: '-'})
})

test('renders component', () => {
  const linkElement = screen.getByText(/Front Cog/i);
  expect(linkElement).toBeInTheDocument();
});

test('shoudl render component', () => {
  const linkElement = screen.getByTestId(/FrontCogComponent/i);
  expect(linkElement).toHaveTextContent('Front Cog')
});

test('front cog component should start with 50', () => {
  const linkElement = screen.getByTestId(/FrontCogComponent/i);
  expect(linkElement).toHaveTextContent('50')
});

test('front cog increaases by 1 on shift up', () => {
  const linkElement = screen.getByTestId(/FrontCogComponent/i);
  const frontIncromentCount = screen.getByTestId(/frontShiftUp/i)
  userEvent.click(frontIncromentCount)
  expect(linkElement).toHaveTextContent('51')
});

test('front cog increaases to max 64 on shift up', () => {
    const linkElement = screen.getByTestId(/FrontCogComponent/i);
    const rearIncromentCount = screen.getByTestId(/frontShiftUp/i)
    for(let i = 0; i < 40; i++) {
      userEvent.click(rearIncromentCount)
    }
    expect(linkElement).toHaveTextContent('64')
});
  
test('front cog with decrease by 1 on down shift', () => {
    const linkElement = screen.getByTestId(/FrontCogComponent/i);
    const rearIncromentCount = screen.getByTestId(/frontShiftDown/i)
    userEvent.click(rearIncromentCount)
    expect(linkElement).toHaveTextContent('49')
})
  
test('front cog decrese to max 24 on shift up', () => {
    const linkElement = screen.getByTestId(/FrontCogComponent/i);
    const rearIncromentCount = screen.getByTestId(/frontShiftDown/i)
    for(let i = 0; i < 40; i++) {
    userEvent.click(rearIncromentCount)
    }
    expect(linkElement).toHaveTextContent('24')
});
  
