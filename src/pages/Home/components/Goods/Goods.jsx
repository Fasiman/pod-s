import { Component } from "react";
import "./Goods.css";
import { Container } from "../../../../Container/Container";

import noImage from "../../../../images/noImage.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";



class Goods extends Component {
  render() {
    return (
      <section className="goods">
        <Container>
          <ul className="goods__list">
            <li className="goods__item">
                <img className="goods__image" src={noImage} alt="" />
                <h3 className="goods__name">Товар 1</h3>
                <p className="goods__description">Опис товару 1</p>
                <p className="goods__type">Техника</p>
                <p className="goods__price">₴1000</p>
                <button className="goods__cart"><FaShoppingCart/></button>
                <button className="goods__heart"><FaHeart/></button>
                <button className="goods__more"><FaArrowRight/></button>
            </li>
            <li className="goods__item">
                <img className="goods__image" src={noImage} alt="" />
                <h3 className="goods__name">Товар 2</h3>
                <p className="goods__description">Опис товару 2</p>
                <p className="goods__type">Техника</p>
                <p className="goods__price">₴2000</p>
                <button className="goods__cart"><FaShoppingCart/></button>
                <button className="goods__heart"><FaHeart/></button>
                <button className="goods__more"><FaArrowRight/></button>
            </li>
            <li className="goods__item">
                <img className="goods__image" src={noImage} alt="" />
                <h3 className="goods__name">Товар 3</h3>
                <p className="goods__description">Опис товару 3</p>
                <p className="goods__type">Техника</p>
                <p className="goods__price">₴3000</p>
                <button className="goods__cart"><FaShoppingCart/></button>
                <button className="goods__heart"><FaHeart/></button>
                <button className="goods__more"><FaArrowRight/></button>
            </li>
          </ul>
        </Container>
      </section>
    );
  }
}

export default Goods;