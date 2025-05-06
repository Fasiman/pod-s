import { Component } from "react";
import "./Header.css";
import { Container } from "../Container/Container";

import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <span className="header__title">Pod's</span>
          <ul className="header__list">
            <li className="header__item">
              <a href="#home" className="header__link">
                Головна
              </a>
            </li>
            <li className="header__item">
              <a href="#categories" className="header__link">
                Категорії
              </a>
            </li>
            <li className="header__item">
              <a href="#contact" className="header__link">
                Контакти
              </a>
            </li>
            <li className="header__item">
              <a href="#about" className="header__link">
                Про нас
              </a>
            </li>
          </ul>

          <div className="header__search">
            <input
              type="text"
              className="header__input"
              placeholder="Пошук..."
            />
            <button className="header__button">
              <FaSearch />
            </button>
          </div>
          <div className="header__cart">
            <a href="#cart" className="header__link">
              <FaCartShopping />
            </a>
          </div>

          <div className="header__avatar">
            <img
              src="https://primamediamts.servicecdn.ru/f/big/3016/3015983.jpg?ff78f719dffc694d759a2ea405e4b407"
              alt="Avatar"
              className="header__image"
            />
          </div>
        </Container>
      </header>
    );
  }
}
