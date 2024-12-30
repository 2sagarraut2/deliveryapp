import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../App.css";

const Navigation = () => {
  const [login, setLogin] = useState(false);

  const onClickLogin = () => {
    login ? setLogin(false) : setLogin(true);
  };

  return (
    <div className="flex">
      <ul className="flex py-4">
        <li className="px-6 py-3">
          <Link className="text-slate-950" to="/">
            Home
          </Link>
        </li>
        <li className="px-6 py-3">
          <Link className="text-slate-950" to="/about">
            About
          </Link>
        </li>
        <li className="px-6 py-3">
          <Link className="text-slate-950" to="/contact">
            Contact
          </Link>
        </li>
        <li className="px-6 py-3">
          <Link className="text-slate-950" to="/cart">
            Cart
          </Link>
        </li>
        <button onClick={onClickLogin} className="px-6 py-3 text-slate-950">
          {login ? "Logout" : "Login"}
        </button>
      </ul>
    </div>
  );
};

export default Navigation;
