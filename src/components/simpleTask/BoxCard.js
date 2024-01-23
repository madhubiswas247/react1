import React, { useState } from "react";

const BoxCard = ({ result, children, buttonName }) => {
  let [show, setShow] = useState(false);
  return (
    <div>
      {show && (
        <div className={`box ${result}`}>
          BoxCard
          {children}
        </div>
      )}
      <button onClick={() => setShow(!show)}>{buttonName}</button>
    </div>
  );
};

export default BoxCard;

// the content comes with children
//this is the demo of props children
