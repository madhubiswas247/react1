import React from "react";
const StyleTagDemo = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };

    return (
      <>
        <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
        <h1 style={myStyle}>My Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }

  export default StyleTagDemo;