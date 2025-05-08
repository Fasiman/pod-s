import React, { useState, useEffect } from "react";
import { Container } from "../../../../Container/Container";
import "./BaseCategories.css";

import { FaCar, FaHome, FaLaptop, FaTshirt, FaShoePrints, FaHandPaper, FaBuilding, FaTooth, FaChild, FaGamepad, FaSwimmingPool, FaPaw, FaSpa, FaMedkit, FaConciergeBell, FaBriefcase, FaIndustry, FaTools, FaBook, FaPenAlt } from "react-icons/fa";

import { getCategoriesAPI } from "../../../../api/getCategoriesAPI";

const iconMap = {
  "Транспорт": <FaCar />,
  "Нерухомість": <FaHome />,
  "Електроніка": <FaLaptop />,
  "Одяг": <FaTshirt />,
  "Взуття": <FaShoePrints />,
  "Аксесуари": <FaHandPaper />,
  "Дім": <FaBuilding />,
  "Побутова": <FaTooth />,
  "Діти": <FaChild />,
  "Іграшки": <FaGamepad />,
  "Спорт": <FaSwimmingPool />,
  "Відпочинок": <FaPaw />,
  "Тварини": <FaPaw />,
  "Краса": <FaSpa />,
  "Здоров’я": <FaMedkit />,
  "Послуги": <FaConciergeBell />,
  "Робота": <FaBriefcase />,
  "Бізнес": <FaIndustry />,
  "Обладнання": <FaTools />,
  "Будівництво": <FaBuilding />,
  "Ремонт": <FaTools />,
  "Книги": <FaBook />,
  "Канцтовари": <FaPenAlt />
};

const BaseCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoriesAPI();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="categories">
      <Container>
        <ul className="categories__list">
          {categories.map((category) => (
            <li
              key={category.id}
              className="categories__item"
              style={{ backgroundColor: category.color || "#ccc" }}
            >
              <h4 className="categories__icon">{iconMap[category.name]}</h4>
              <h4 className="categories__name">{category.name}</h4>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default BaseCategories;
