import React from "react";
import "./Info.css";
import { Container } from "../../../../Container/Container";

import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



const Info = () => {
  return (
    <section className="info">
      <Container>
        <h2 className="info__name">
          Машина для стрижки волос Philips HC5630/15
        </h2>
        <div className="info__image">
          <img
            src="https://images.prom.ua/4537954085_w1280_h640_mashinka-dlya-strizhki.jpg"
            alt="Philips HC5630/15"
          />
        </div>
        <p className="info__description">
            Машинка для стрижки Philips HC5630/15 - це потужний інструмент для
            стрижки волосся, який забезпечує точність і комфорт під час використання.
            Завдяки своїм технологіям, вона дозволяє досягти професійних результатів
            в домашніх умовах. Вона має різні насадки для регулювання довжини
            стрижки, що робить її універсальною для будь-якого стилю.
        </p>
        <p className="info__price">Ціна: ₴1500</p>
        <p className="info__category">Категорія: Техніка</p>
        <p className="info__type">Тип: Машинка для стрижки</p>
        <p className="info__brand">Бренд: Philips</p>
        <p className="info__model">Модель: HC5630/15</p>
        <p className="info__color">Колір: Чорний</p>
        <p className="info__material">Матеріал: Пластик</p>
        <button className="info__cart">
            В кошик <FaShoppingCart/>
        </button>
        <button className="info__heart">
            Улюблене <FaHeart/>
        </button>
      </Container>
    </section>
  );
};

export default Info;
