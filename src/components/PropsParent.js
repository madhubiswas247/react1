import React from "react";
import PropsChild from "./PropsChild";

const PropsParent = () => {
  const bcolor = "Blue";

  return (
    <div>
      Parent Component
      <PropsChild kcolor={bcolor} />
    </div>
  );
};

export default PropsParent;
