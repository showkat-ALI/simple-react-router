import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
  return (
    <nav>
      <NavLink activeStyle={activeStyle} to="/Home">Home</NavLink>
      <NavLink activeStyle={activeStyle} to="/About">About</NavLink>
      <NavLink activeStyle={activeStyle} to="/Users">Users</NavLink>
    </nav>
  );
};

export default Header;
