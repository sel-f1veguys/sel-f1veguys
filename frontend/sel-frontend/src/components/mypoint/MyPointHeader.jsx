'use client';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './MyPointHeader.module.css';

const MyPointHeader = () => {

  const navigate = useNavigate();

  const handleViewPoints = () => {
    navigate('/mypoint');
  };

  const handleUsePoints = () => {
    navigate('/');
  };
  return (
    <div className={styles.headerBottom}>
      <div className={styles.userInfoBox}>
        <div className={styles.userName}>홍길동님</div>
        <div className={styles.pointAmount}>
          1,000 <span>포인트</span>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.historyButton} onClick={handleViewPoints}>내역보기</button>
          <button className={styles.chargeButton} onClick={handleUsePoints}>사용하기</button>
        </div>
      </div>
    </div>
  );
};

export default MyPointHeader;
