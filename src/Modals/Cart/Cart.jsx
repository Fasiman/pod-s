import React from "react";
import "./Cart.css";

import { IoClose } from "react-icons/io5";


import Empty from "../../images/empty.png";

export const handleCloseCart = () => {
    const backdrop = document.querySelector(".cart__backdrop");
    backdrop.style.display = "none";
}

export const handleOpenCart = () => {
    const backdrop = document.querySelector(".cart__backdrop");
    backdrop.style.display = "block";
}

const Cart = () => {

    

    

  return (
    <div className="backdrop cart__backdrop">
      <form className="cart__modal">
        <div className="cart__modal__header">
          <h2>Кошик</h2>
          <button type="button" onClick={handleCloseCart} className="cart__modal__close">
            <IoClose />
          </button>
        </div>
        <img className="caer__modal__empty" src={Empty} alt="" />
        <h3 className="cart__modal__empty__text">
          Ваш кошик поки що порожній
        </h3>
      </form>
    </div>
  );
};

export default Cart;
