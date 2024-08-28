import React from 'react';
import styles from './Tree.module.css';
import Watering from './Watering';

const Tree = () => {
  return (
    <main className={styles.main}>
      <div>
        <p>포인트 사용
          </p>
      </div>
      <div>
        <p>
          나무 키우기  
        </p>
      </div>
      <div>
        <Watering />
      </div>
    </main>
  );
};

export default Tree
;
