import React from "react";
import styles from "./BoardNav.module.css";
import { Link } from "react-router-dom";

const BoardNav = (props) => {
  return (
    <div className={styles.container}>
      <img src="./mainLogo.png" alt="logo" className={styles.logo} />
      <Link
        to={"/delivery-board"}
        className={styles.link}
        state={{
          id: props.id,
        }}
      >
        <button className={styles.delivery}>공동 배달</button>
      </Link>
      <button className={styles.buy}>공동 구매</button>
      <button className={styles.community}>커뮤니티</button>
      <button className={styles.residentService}>입주자 서비스</button>
    </div>
  );
};
export default BoardNav;
