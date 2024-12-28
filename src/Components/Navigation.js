import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  const [login, setLogin] = useState(false);

  const onClickLogin = () => {
    login ? setLogin(false) : setLogin(true);
  };

  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link className="custom-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="custom-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="custom-link" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="custom-link" to="/cart">
            Cart
          </Link>
        </li>
        <button onClick={onClickLogin} className="login-btn">
          {login ? "Logout" : "Login"}
        </button>
      </ul>
    </div>
  );
};

export default Navigation;
