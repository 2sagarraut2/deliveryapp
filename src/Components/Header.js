import React from "react";
// import "../App.css";
import Navigation from "./Navigation";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between px-32 top-0 sticky z-50 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
      <Link className="px-6 py-2" to="/">
        <img className="h-14 rounded-xl" alt="logo" src={LOGO_URL} />
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
