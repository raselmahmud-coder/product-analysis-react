import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/order-review"}
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        OrderReview
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Contact
      </NavLink>
      <NavLink
        to={"/grandpa"}
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Grandpa
      </NavLink>
    </nav>
  );
};

export default Header;
