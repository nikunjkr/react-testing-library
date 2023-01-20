import './App.css';
import CartItem, { items } from './modules/common/components/cart_item';
import Counter from './modules/common/components/Counter';


function App() {
  return (
    <div className="" style={{margin: "auto", width :"100%", padding: "100px"}}>
      <CartItem items={items}/>
      <Counter/>
    </div>
  );
}

export default App;
