import React, { useContext } from "react";
import MainContext from "../../../context/context";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { addToBasket } = useContext(MainContext);

  return (
    <div className="col-4 mb-5">
      <div class="card" width="18rem">
        <img src={card.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{card.title}</h5>
          <p class="card-text">{card.desc}</p>
          <div className="card__buttons">
            <button className="cart__button" onClick={() => addToBasket(card)}>CART</button>
            <button className="det__button">
              <Link to={`details/${card._id}`}>DETAILS</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
