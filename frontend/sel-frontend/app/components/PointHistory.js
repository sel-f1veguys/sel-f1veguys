import React from 'react';
import '@/app/styles/global.css';
import styles from '@/app/styles/PointHistory.module.css';

const PointHistory = ({ filter }) => {
  // 실제로는 여기서 filter를 사용하여 API 호출 등을 통해 데이터를 가져와야 합니다.
  const dummyData = [
    { date: '2024.01.03', time: '04:31:37', action: '출석 적립', points: 50, total: 1301 },
    { date: '2024.01.01', time: '11:32:12', action: '나무 물주기', points: -50, total: 1251 },
    { date: '2024.01.01', time: '15:20:22', action: '출석 적립', points: 30, total: 1281 },
    { date: '2024.01.02', time: '08:14:56', action: '나무 물주기', points: -20, total: 1261 },
  ];

  const groupedData = dummyData.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = [];
    }
    acc[item.date].push(item);
    return acc;
  }, {});

  const dates = Object.keys(groupedData);

  return (
    <div className={styles.pointHistory}>
      {dates.map((date, dateIndex) => (
        <div key={date} className={styles.dateGroup}>
          <div className={styles.dateLabel}>{date}</div>
          {groupedData[date].map((item, index) => (
            <div
              key={index}
              className={`${styles.historyItem} ${index < groupedData[date].length - 1 ? styles.itemBorder : ''}`}
            >
              <div className={styles.time}>{item.time}</div>
              <div className={styles.actionPointsContainer}>
                <div className={styles.action}>{item.action}</div>
                <div className={styles.pointsContainer}>
                  <div className={`${styles.points} ${item.points > 0 ? styles.positive : styles.negative}`}>
                    {item.points > 0 ? '+' : ''}{item.points} 포인트
                  </div>
                  <div className={styles.total}>{item.total} 포인트</div>
                </div>
              </div>
            </div>
          ))}
          {dateIndex < dates.length - 1 && <div className={styles.dateSeparator}></div>}
        </div>
      ))}
    </div>
  );
};

export default PointHistory;
