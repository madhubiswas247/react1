import React from "react";

 const WithoutUseStateDemo = () => {
  let count = 0;
  const increment = () => {
    count++;
    console.log(count);  //incrementing but not reflecting on UI
    return count;
  };

  return (
    <div>
      Add
      <button onClick={increment}>+</button>
      Count = {count}
    </div>
  );
};

export default WithoutUseStateDemo;
