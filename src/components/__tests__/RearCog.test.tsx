import { fireEvent, render, screen } from "@testing-library/react";
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

test('renders component', () => {
  const linkElement = screen.getByText(/Rear Cog/i);
  expect(linkElement).toBeInTheDocument();
});

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

// ##########

// const RearCogContextProvider = ({ children }) => (
//     <RearCogContext.Provider>{children}</RearCogContext.Provider>
// );

// const wrapper = ({ children }) => (
//     <RearCogContextProvider>{children}</RearCogContextProvider>
// )

// let resultCogValue = ();

// const mockSetCog = jest.fn().mockImplementation(rearCog => {
//     resultCogValue = (...rearCog)
//     return resultCogValue
// })

// const mockUseContext = jest.fn().mockImplementation(() => ({
//     rearCog: (),
//     setRearCog: mockSetCog,
// }))

// React.useContext = mockUseContext;

// it('shoudl test original state of rear cog', () => {
//     const {resultCogValue} = renderHook(() => RearCogCounter(), { wrapper });

//     expect(resultCogValue).toHaveValue(0)
// })


// ############
// describe('testing rear cog component', () => {
//     let container: HTMLDivElement

//     beforeEach(() => {
//         container = document.createElement('div');
//         document.body.appendChild(container);
//         ReactDOM.render(<RearCogCounter />, container)
//     })
    
//     afterEach(() => {
//         document.body.removeChild(container)
//         container.remove()
//     })
    
//     it('will test original state of rear cog = 15', () => {
//         const titles = container.querySelector('#RearCogComponent')
//         expect(titles).toHaveTextContent('Rear Cog')
//     })
// })





// ##################
// beforeEach(() => {
//     render(<RearBasicCogs />)
//     rearBasicCogs = screen.getByRole('spinbutton')
//     rearIncromentCount = screen.getByRole('button', { name: '+'})
//     readDecrementCount = screen.getByRole('button', { name: '-'})
// })

// it('should start with state of 15', () => {
//     expect(rearBasicCogs).toHaveValue(15)
// })

// it('should increase by 1 when shifted up', () => {
//     expect(rearBasicCogs).toHaveValue(15)
//     userEvent.click(rearIncromentCount)
//     expect(rearBasicCogs).toHaveValue(16)
// })

// it('should start with 15 but decres by one on shifting down', () => {
//     expect(rearBasicCogs).toHaveValue(15)
//     userEvent.click(readDecrementCount)
//     expect(rearBasicCogs).toHaveValue(14)
// })

// it('should not increase past 46 on up shifting', () => {
//     expect(rearBasicCogs).toHaveValue(15)
//     for(let i = 0; i < 40; i++) {
//         userEvent.click(rearIncromentCount)
//     }
//     expect(rearBasicCogs).toHaveValue(46)
// })

// it('should not decrease past 1 on down shifting', () => {
//     expect(rearBasicCogs).toHaveValue(15)
//     for(let i = 0; i < 18; i++) {
//         userEvent.click(readDecrementCount)
//     }
//     expect(rearBasicCogs).toHaveValue(1)
// })