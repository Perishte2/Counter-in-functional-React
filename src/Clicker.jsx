import React, {useState, useEffect} from 'react';


function Clicker() {
  const [count, setCount] = useState(0);

  const increment = () => {
     setCount(count + 1);
  }

  const decrement = () => {
      setCount(count - 1);
  }


  useEffect(() => {
    console.log('hello from clicker', count);

    return(() => console.log('good bye clicker'));
  },[count]);

  return (
    <div className="clicker">
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      
    </div>
  );
}

export default Clicker;
