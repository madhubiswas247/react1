import React, { useState } from "react";

const UseStateDemo = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    count++;
    setCount(count); //incrementing andreflecting on UI
    console.log(count);
    return count;
  };

  return (
    <div>
      Add
      <button onClick={increment}>+</button>
      <button onClick={() => setCount(() => count--)}>-</button>
      <button onClick={() => setCount(count * 2)}>Multiply x 2</button>
      <button onClick={() => setCount(() => (count = 0))}>Reset</button>
      Count = {count}
    </div>
  );
};

export default UseStateDemo;
