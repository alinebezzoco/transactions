import React from "react";
import logo from '../../assets/icons/dollar-symbol.svg';
import "./Header.css";

function Header() {
  return (
    <header>
        <img src={logo} title="dollar symbol" alt="dollar symbol" />
    </header>
  );
}

export default Header;
