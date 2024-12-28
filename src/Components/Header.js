import React from "react";
import "../App.css";
import Navigation from "./Navigation";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="custom-link" to="/">
        <img className="logo" alt="logo" src={LOGO_URL} />
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
