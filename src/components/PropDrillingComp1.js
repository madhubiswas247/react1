import React from "react";
import PropDrillingComp2 from "./PropDrillingComp2";

const PropDrillingComp1 = () => {
  const info = "This will be shared across all comp";
  return (
    <div>
      PropDrillingComp1
      <PropDrillingComp2 info={info} />
    </div>
  );
};

export default PropDrillingComp1;

// this is the demo of prop drilling where an info is shared and passed across components.
//this causes a problem, as we go through multiple components and the
//complexity increases. We would need a centralized solutiom.
