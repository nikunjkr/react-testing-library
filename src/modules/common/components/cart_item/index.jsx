import React, { useEffect, useState } from 'react';

export const items= [
  "Plus 3 Months Plan",
  "Plus 1 Year Plan",
  "TATA AIA Insurance"
]

function CartItem(props={items}) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {items} = props ;

  useEffect(()=> {
    setTimeout(()=> {
      setIsLoggedIn(true);
    }, 500)
  }, [])
  return (
    <div>
      <ul>
        {items.map(item=> (
          <li key={item}>
            {item}
          </li>
        ))}
        {isLoggedIn ? (
          <button type="submit">Pay and Continue</button>
        ):(
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )
        }
      </ul>
    </div>
  );
}

export default CartItem;