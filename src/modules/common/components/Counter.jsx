import React, {useState} from 'react';

/*
 Increase counter (not greater than a specific number)
 Decrease counter (not less than 0)
*/
const Counter = (props) => {

  const { maxCount, isCountCap = false } = props;

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if(isCountCap && count > maxCount){
     return;
    }
    setCount(count=> count+ 1);
  }

  const handleDecrement = () => {
    if(count > 0){
      setCount(count=> count - 1);
    }
  }

  return (
    <div style={{display: 'flex'}}>
      <button className="" onClick={handleDecrement}>
        -
      </button>
        <h2 style={{margin:"10px"}}>{count}</h2>
      <button className="" onClick = {handleIncrement}>
        +
      </button>
      
    </div>
  )
}

export default Counter;