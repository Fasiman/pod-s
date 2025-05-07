import React from "react";
import { Component } from "react";
import { Container } from "../../../../Container/Container";
import "./BaseCategories.css";

class BaseCategories extends Component {
  render() {
    return (
      <section className="categories">
        <Container>
          <ul className="categories__list">
            <li className="categories__item">
              <h3 className="categories__name">Category 1</h3>
            </li>
            <li className="categories__item">
              <h3 className="categories__name">Category 2</h3>
            </li>
            <li className="categories__item">
              <h3 className="categories__name">Category 3</h3>
            </li>
          </ul>
        </Container>
      </section>
    );
  }
}

export default BaseCategories;
