import React from "react";
import { Link } from "react-router-dom";
import { Menulist } from "./MenuList";
import "./Navbar.css";

const Navbar = () => {
  const menuList = Menulist.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <Link className={url.location === url ? "active" : ""} to={url}>
          {title}
        </Link>
      </li>
    );
  });
  return (
    <nav>
      <div className="logo">
        VPN<font>Lab</font>
      </div>
      <ul className="menu-list">{menuList}</ul>
    </nav>
  );
};

export default Navbar;
