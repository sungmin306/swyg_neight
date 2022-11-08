import React from "react";
import styles from "./BoardBox.module.css";
import { Link } from "react-router-dom";

const BoardBox = (props) => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.icon}>
        <i class="fa-regular fa-circle-check"></i>
      </div>
      <Link to={"/delivery-detail"} className={styles.link}>
        <div className={styles.container}>
          <div className={styles.storeAndPlatform}>
            <p className={styles.title}>가게 이름 / 구매처</p>
            <p className={styles.value}>멋쟁이 버거 / 배달의 민족</p>
          </div>
          <div className={styles.num}>
            <p className={styles.title}>모집 인원</p>
            <p className={styles.value}>3명</p>
          </div>
          <div className={styles.time}>
            <p className={styles.title}>소요 시간</p>
            <p className={styles.value}>48-62분</p>
          </div>
          <div className={styles.location}>
            <p className={styles.title}>분배 장소</p>
            <p className={styles.value}>
              서울 강남구 역삼도 790-6 MARU 180 지하 1층
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BoardBox;
