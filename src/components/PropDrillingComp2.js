import React from "react";
import PropDrillingComp3 from "./PropDrillingComp3";

const PropDrillingComp2 = ({ info }) => {
  return (
    <div>
      PropDrillingComp2
      <div>{info}</div>
      <PropDrillingComp3 info={info} />
    </div>
  );
};

export default PropDrillingComp2;
