import React, { useState } from "react";

const UseStateProblemDemo = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    //calling setcount thrice for incrementing add by 3 but it is not happening
    //value is getting incremented in next render only
    setCount(count + 1);
    console.log(count); //0+1
    setCount(count + 1);
    console.log(count); //0 + 1
    setCount(count + 1);
    console.log(count); //0+1
    return count;
  };

  /*to resolve this issue use :-
   setCount(count => count+1);  //here we are passing the updater function instead of next state
   count => count+1 is the updater function which takes the pending state and calculate the next state.
  */

  return (
    <div>
      Add
      <button onClick={increment}>+</button>
      <button onClick={() => setCount(() => count--)}>-</button>
      Count = {count}
    </div>
  );
};

export default UseStateProblemDemo;
