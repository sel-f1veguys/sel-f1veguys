  import React, { useEffect, useState } from "react";
  import { useNavigate, Link, useLocation  } from 'react-router-dom';
  import styles from './Main.module.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import ProgressLine from './ProgressLine';

  const Main = () => {
    const navigate = useNavigate();
    const [donationPercent, setDonationPercent] = useState(80);

    return (
      <div className={styles.mainstyle}>
        {/* 파란색 배경만 존재 */}
        <div className={styles.bluebg}></div>

        {/* 배경 아래에 콘텐츠 */}
        <div className={styles.contentContainer}>
          <p className={styles.pointText}>포인트 사용</p>
          <div className={styles.cardcontain}>
          <div className={styles.gameBox}>
            <div className={styles.treegrow}>
            <p className={styles.gameTitle1}>나무</p>
            <p className={styles.gameTitle2}> 키우기</p>
            <button className={styles.gameButton} onClick={() => navigate('/tree')}>게임 바로가기</button>
            </div>
            <img className={styles.treeImage} src="./assets/treetree.png" alt="Tree Image" />
          </div>
          </div>
        </div>

        <div className={styles.campaignContainer}>
          <p className={styles.campaignTitle}>오늘의 캠페인</p>
          <Link to="/campaign" className={styles.campaignlink}>
          캠페인 바로가기 <i class="bi bi-chevron-right"></i>
        </Link>
          <img className={styles.campaignImage} src="/assets/green1.png" alt="Campaign Image" />
          <div className={styles.campaignDetails}>
            <p className={styles.campaignText}>미래 세대의 숲을 지켜주세요</p>
            <div className={styles.campaignInfo}>
              <p className={styles.campaignDays}>d-35</p>
              <p className={styles.campaignAmount}>2,812,379원</p>
            </div>
            <p className={styles.campaignProgress}>{donationPercent}%</p>
            <ProgressLine
              visualParts={[
                {
                  percentage: `${donationPercent}%`,
                  color: "#008DFF"
                }
              ]}
            />
          </div>
        </div>
      </div>
    );
  };

  export default Main;
