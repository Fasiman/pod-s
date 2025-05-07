import React, { useState, useEffect } from "react";
import { Container } from "../../../../Container/Container";
import "./BaseCategories.css";

import { FaCar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { FaShoePrints } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaTooth } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";
import { FaSpa } from "react-icons/fa";
import { FaMedkit } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa"; 
import { FaBriefcase } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";

import { getCategoriesAPI } from "../../../../api/getCategoriesAPI";

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

  // Icons and color mapping for categories
  const categoryData = {
    "Транспорт": { icon: <FaCar />, color: "#E64A19" },
    "Нерухомість": { icon: <FaHome />, color: "#388E3C" },
    "Електроніка": { icon: <FaLaptop />, color: "#1976D2" },
    "Одяг": { icon: <FaTshirt />, color: "#F57C00" },
    "Взуття": { icon: <FaShoePrints />, color: "#D32F2F" },
    "Аксесуари": { icon: <FaHandPaper />, color: "#00796B" },
    "Дім": { icon: <FaBuilding />, color: "#8E24AA" },
    "Побутова": { icon: <FaTooth />, color: "#0288D1" },
    "Діти": { icon: <FaChild />, color: "#F44336" },
    "Іграшки": { icon: <FaGamepad />, color: "#D81B60" },
    "Спорт": { icon: <FaSwimmingPool />, color: "#388E3C" },
    "Відпочинок": { icon: <FaPaw />, color: "#FF7043" },
    "Тварини": { icon: <FaPaw />, color: "#F44336" },
    "Краса": { icon: <FaSpa />, color: "#9C27B0" },
    "Здоров’я": { icon: <FaMedkit />, color: "#43A047" },
    "Послуги": { icon: <FaConciergeBell />, color: "#0288D1" },
    "Робота": { icon: <FaBriefcase />, color: "#FF4081" },
    "Бізнес": { icon: <FaIndustry />, color: "#1976D2" },
    "Обладнання": { icon: <FaTools />, color: "#FF8F00" },
    "Будівництво": { icon: <FaBuilding />, color: "#7B1FA2" },
    "Ремонт": { icon: <FaTools />, color: "#F57C00" },
    "Книги": { icon: <FaBook />, color: "#0288D1" },
    "Канцтовари": { icon: <FaPenAlt />, color: "#C2185B" },
  };

  return (
    <section className="categories">
      <Container>
        <ul className="categories__list">
          {categories.map((category) => (
            <li key={category.id} className="categories__item" style={{ backgroundColor: categoryData[category.name]?.color }}>
              <h4 className="categories__icon">{categoryData[category.name]?.icon}</h4>
              <h4 className="categories__name">{category.name}</h4>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default BaseCategories;
