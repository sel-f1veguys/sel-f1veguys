import React, { useState } from "react";
import Modal from 'react-modal';
import styles from './Tree.module.css';
import ProgressLine from './ProgressLine';

Modal.setAppElement('#root'); // 모달 접근성 설정, root를 메인 요소로 설정

const Tree = () => {
  const [water, setWater] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWatering = () => {
    if (water < 3000) {
      setWater(prevWater => prevWater + 500);
    }
  };

  const receiveGift = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
    setWater(0); // 물 양 초기화
  };

  const getImageSrc = () => {
    if (water >= 3000) {
      return './assets/tree4.png';
    } else if (water >= 2000) {
      return './assets/tree3.png';
    } else if (water >= 1000) {
      return './assets/tree2.png';
    } else {
      return './assets/tree1.png';
    }
  };

  return (
    <main className={styles.main}>
      <div>
        <img className={styles.treeimg} src={getImageSrc()} alt="Tree" />
        <ProgressLine
          visualParts={[
            {
              percentage: `${(water / 3000) * 100}%`,
              color: "#008DFF"
            }
          ]}
        />
        {water < 3000 ? (
          <button onClick={handleWatering}>
            물주기
          </button>
        ) : (
          <button onClick={receiveGift}>
            기프티콘 받기
          </button>
        )}
      </div>

      {/* 모달 컴포넌트 */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="기프티콘 받기"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>축하합니다! 나무가 다 컸어요</h2>
        <img src="./assets/tree4.png" alt="Tree" className={styles.modaltreeimg} />
        <p>보상을 선택하세요</p>
        <button onClick={closeModal} className={styles.giftButton}>커피</button>
        <button onClick={closeModal} className={styles.giftButton}>간식</button>
        <button onClick={closeModal} className={styles.giftButton}>빵</button>
      </Modal>
    </main>
  );
};

export default Tree;
