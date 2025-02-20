import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "./style.css";
import NavLinks from "./Navlinks";

const NavContent = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="logo">
        <img src="../images/logo.png" alt="logo" />
        </div>

        <NavLinks />
        <div className="menu-btn">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default NavContent;
