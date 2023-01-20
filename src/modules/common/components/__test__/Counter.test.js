/*  
 Test the props 
 Test the type to be number (not undefined)
*/
import { render, screen} from '@testing-library/react'
import user from "@testing-library/user-event"
import Counter from '../Counter';


describe('counter', ()=> {

  test('renders correctly', ()=> {
    // first render 
    render(<Counter/>)
    const incrementButton = screen.getByRole('button',{
      name: "+",
    });
    expect(incrementButton).toBeInTheDocument();
  }) 

  test('render a count of 1 after the increment button', async () => {
    // user.setup();
    render(<Counter/>)
    const incrementButton = screen.getByRole("button", {
      name: "+"
    })
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  })
}) 


test('render counter', () => {
  render(<Counter/>)
  const element = screen.getByText(0);
  expect(element).toBeInTheDocument();
})

test('render counter contains true values', () => {
  render(<Counter/>)
  const element = screen.getByText(0);
  expect(element).toBeTruthy();
})





