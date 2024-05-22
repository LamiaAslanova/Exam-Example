import React from "react";
import { Link } from "react-router-dom";
import '../../site/Header/Header.css'

const Header = () => {
  return (
    <header>
      <div className="header__bottom">
        <div className="header__bottom__left">
          <h1>
            Selling<span>.</span>
          </h1>
        </div>
        <div className="header__bottom__right">
          <ul>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="products">Products</Link>
            </li>
            <li>
              <Link to="add">Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
