import CartItem, { items } from "../cart_item";
import {screen, render} from "@testing-library/react"

describe('cart page', () => {
    test('Check Continue Button appear after login', async ()=> {
      render(<CartItem items={items}/>);
      const buttonElement = await screen.findByRole('button', {
        name: "Pay and Continue"
      });

      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toBeEnabled();
      expect(buttonElement).toHaveAttribute('type', 'submit')
    })
});