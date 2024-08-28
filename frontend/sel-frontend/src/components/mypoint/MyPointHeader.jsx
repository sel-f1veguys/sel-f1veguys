'use client';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './MyPointHeader.module.css';

const MyPointHeader = () => {

  const navigate = useNavigate();
  const points = 1251;
  const handleViewPoints = () => {
    navigate('/mypoint');
  };

  const handleUsePoints = () => {
    navigate('/');
  };
  return (
    <div className={styles.headerBottom}>
      <div className={styles.userInfoBox}>
      <div className={styles.pointInfo}>
        <p className={styles.pointLabel}>총 사용 가능 포인트</p>
        <p className={styles.pointAmount}>{points.toLocaleString()} 포인트</p>
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
