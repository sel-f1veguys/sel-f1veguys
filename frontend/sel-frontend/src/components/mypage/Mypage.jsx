import React from 'react';
import styles from './Mypage.module.css';
import MyPointHeader from '../mypoint/MyPointHeader';

const MyPage = () => {


  return (
    <div className={styles.myPage}>
       <div className={styles.header}>
        <div className={styles.headerTop}>
          마이페이지
        </div>
        <MyPointHeader />
      </div>
      <div className={styles.campaignSection}>
        <div className={styles.campaignTitle}>내가 참여한 캠페인</div>
        <div className={styles.campaignImage}></div>
        <div className={styles.campaignName}>미래 세대의 숲을 지켜주세요</div>
        <div className={styles.campaignAmount}>2,812,379원</div>
      </div>
      <div className={styles.bottomNav}>
        <div className={styles.navItem}>
          <div className={styles.navIcon}></div>
          내 정보
        </div>
        <div className={styles.navItem}>
          <div className={styles.navIcon}></div>
          등록된카드
        </div>
        <div className={styles.navItem}>
          <div className={styles.navIcon}></div>
          보관함
        </div>
        <div className={styles.navItem}>
          <div className={styles.navIcon}></div>
          문의하기
        </div>
      </div>
    </div>
  );
};

export default MyPage;