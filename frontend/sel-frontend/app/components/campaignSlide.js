'use client';

import React, { useState } from 'react';
import styles from '@/app/styles/campaignSlide.module.css';
import '@/app/styles/global.css';

export default function campaignSlide() {
  const [isOpen, setIsOpen] = useState(false);
  const [points, setPoints] = useState('');
  const [remainingPoints, setRemainingPoints] = useState(1000); // 초기 포인트를 1000으로 설정

  const toggleModal = () => {
    if (isOpen) {
      const overlay = document.querySelector(`.${styles.modalOverlay}`);
      overlay.classList.add(styles.closing);
      setTimeout(() => {
        setIsOpen(false);
        overlay.classList.remove(styles.closing);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  const handleDonate = () => {
    const donatePoints = Number(points);
    if (donatePoints <= remainingPoints) {
      setRemainingPoints(remainingPoints - donatePoints);
      console.log('Donating points:', donatePoints);
      // API 호출 등을 수행합니다.
      toggleModal();
      setPoints('');
    } else {
      alert('포인트가 부족합니다.');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      toggleModal();
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= remainingPoints)) {
      setPoints(value);
    }
  };

  const handleAllDonate = () => {
    setPoints(remainingPoints.toString());
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleModal} className={styles.button}>
        Button
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            <h2>얼만큼 기부하시나요?</h2>
            <p>포인트를 입력하세요</p>
            <input
              type="number"
              value={points}
              onChange={handleInputChange}
              placeholder="포인트를 입력하세요"
              className={styles.input}
            />
            <p>남은 포인트: {remainingPoints}</p>
            <button onClick={handleAllDonate} className={styles.allDonateButton}>
              전체 기부
            </button>
            <button onClick={handleDonate} className={styles.donateButton}>
              기부하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}