import React, { useContext } from "react";
import MainContext from "../../../context/context";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { basketItems } = useContext(MainContext);

  return (
    <header>
      <div className="header__top">
        <div className="header__top__left">
          <Link>
            <i class="fa-brands fa-facebook-f"></i>
          </Link>
          <Link>
            <i class="fa-brands fa-twitter"></i>
          </Link>
          <Link>
            <i class="fa-brands fa-instagram"></i>
          </Link>
          <Link>
            <i class="fa-brands fa-linkedin-in"></i>
          </Link>
        </div>
        <div className="header__top__right">
          <div className="cont">
            <i class="fa-solid fa-phone"></i>
            <p>(+1) 234 5678 9101</p>
          </div>
          <div className="cont">
            <i class="fa-solid fa-envelope"></i>
            <p>shop@yourdomain.com</p>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom__left">
          <h1>
            Selling<span>.</span>
          </h1>
        </div>
        <div className="header__bottom__right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Products</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Special</Link>
            </li>
            <li>
              <Link to="#">Testimonials</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Link to="basket">Cart({basketItems.length})</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
