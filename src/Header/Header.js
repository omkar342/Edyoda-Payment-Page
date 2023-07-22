import React from "react";
import "./Header.css";
import logo from "../assets/Edyoda-logo.png";
import { DropIcon, SearchIcon } from "../Icons/Icons";
import JoinNowButton from "../Button Components/JoinNowButton";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-part">
        <img className="logo" src={logo} alt="" />
        <p>Courses</p>
        <DropIcon />
        <p>Programs</p>
        <DropIcon />
      </div>
      <div className="button-part">
        <SearchIcon />
        <p>Log In</p>
        <JoinNowButton />
      </div>
    </div>
  );
};

export default Header;
