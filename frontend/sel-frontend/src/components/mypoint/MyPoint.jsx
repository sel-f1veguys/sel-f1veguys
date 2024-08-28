'use client';
import React, { useState } from 'react';
import FilterPopup from './PointFilterPop';
import PointHistory from './PointHistory';
import styles from './MyPoint.module.css';

const MyPoint = () => {
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [filter, setFilter] = useState({
    period: '1개월',
    category: '전체',
    sort: '최신'
  });

  const toggleFilterPopup = () => {
    setShowFilterPopup(!showFilterPopup);
  };

  const applyFilter = (newFilter) => {
    setFilter(newFilter);
    setShowFilterPopup(false);
  };

  return (
    <div className={styles.myPage}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          마이페이지
        </div>
        <div className={styles.headerBottom}>
          <div className={styles.userInfoBox}>
            <div className={styles.userName}>홍길동님</div>
            <div className={styles.pointAmount}>
              1,000 <span>포인트</span>
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.historyButton}>내역보기</button>
              <button className={styles.chargeButton}>사용하기</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.filterSection}>
        <button onClick={toggleFilterPopup} className={styles.filterButton}>
          {`${filter.period} · ${filter.category} · ${filter.sort}`}
        </button>
      </div>

      <div className={styles.pointHistory}>
        <PointHistory filter={filter} />
      </div>

      {showFilterPopup && (
        <FilterPopup
          currentFilter={filter}
          onApply={applyFilter}
          onClose={toggleFilterPopup}
        />
      )}
    </div>
  );
};

export default MyPoint;
