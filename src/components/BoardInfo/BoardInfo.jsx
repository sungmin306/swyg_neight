import React from 'react';
import styles from './BoardInfo.module.css';

const BoardInfo = (props) => {
        return (
                <div className={styles.container}>
                        <p className={styles.myInfo}>내 정보 관리</p>
                        <p className={styles.message}>메시지 / 알림</p>
                </div>
        );
}

export default BoardInfo;