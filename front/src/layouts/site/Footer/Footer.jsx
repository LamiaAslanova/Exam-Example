import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4>ABOUT US</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
              veritatis aliquam.
            </p>
          </div>
          <div className="col-3">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-3">
            <h4>FOLLOW US</h4>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="col-3">
              <h4>FEATURED PRODUCT</h4>
            <div className="shoe__card">
              <img
                width="255px"
                height="255px"
                src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp"
                alt=""
              />
              <h5>Leather Brown Shoe</h5>
              <span>$60.00</span>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
      </div>
    </footer>
  );
};

export default Footer;
