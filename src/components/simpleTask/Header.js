import React from "react";
import Logo from "../../logo.svg";

const Header = (props) => {

  return (
    <header style={{ backgroundColor: "black", height: "32px" }}>
      <img style={{ width: "22px" }} src={Logo} alt=""></img>
      <a style={{ color: "aquamarine" }} href="/">
        {props.headerMenu}
      </a>
    </header>
  );
};

export default Header;
