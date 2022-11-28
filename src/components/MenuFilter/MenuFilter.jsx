import React from "react";
import styles from "./MenuFilter.module.css";
import { useState } from "react";
import { useEffect } from "react";

const MenuFilter = (props) => {
  const [id, setId] = useState();
  const [filterState, setFilterState] = useState({
    passingTags: {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
    },
  });

  const handleMenuClick = (e) => {
    const menuId = e.target.id;
    setId(parseInt(e.target.id));

    setFilterState({
      passingTags: {
        ...filterState.passingTags,
        [menuId]: !filterState.passingTags[menuId],
      },
    });

    if (filterState.passingTags[menuId] === true) {
      let menu = document.getElementById(menuId);
      menu.style.color = "black";
      menu.style.backgroundColor = "white";
    }

    if (filterState.passingTags[menuId] === false) {
      let menu = document.getElementById(menuId);
      menu.style.color = "white";
      menu.style.backgroundColor = "#4c9be6";
    }

    props.getId(parseInt(e.target.id));
  };

  useEffect(() => {});

  return (
    <div className={styles.container}>
      <button id="0" className={styles.dessert} onClick={handleMenuClick}>
        커피 / 디저트
      </button>
      <button id="1" className={styles.fastfood} onClick={handleMenuClick}>
        패스트푸드
      </button>
      <button id="2" className={styles.lunchBox} onClick={handleMenuClick}>
        도시락
      </button>
      <button id="3" className={styles.asian} onClick={handleMenuClick}>
        아시안
      </button>
      <button id="4" className={styles.bunsik} onClick={handleMenuClick}>
        분식
      </button>
      <button id="5" className={styles.korean} onClick={handleMenuClick}>
        한식
      </button>
      <button id="6" className={styles.chinese} onClick={handleMenuClick}>
        중식
      </button>
      <button id="7" className={styles.japanese} onClick={handleMenuClick}>
        일식
      </button>
      <button id="8" className={styles.western} onClick={handleMenuClick}>
        양식
      </button>
    </div>
  );
};

export default MenuFilter;
