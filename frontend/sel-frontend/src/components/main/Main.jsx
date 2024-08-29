import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import styles from './Main.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProgressLine from './ProgressLine';
import Carousel from 'react-multi-carousel';  // react-multi-carousel 패키지 사용
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import moment from 'moment'; // D-day 계산을 위해 moment.js 사용

const Main = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('/api/campaigns/ongoing');
        setCampaigns(response.data);
      } catch (error) {
        console.error("Failed to fetch campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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

      {/* 캠페인 Carousel */}
      <div className={styles.campaignContainer}>
        <p className={styles.campaignTitle}>오늘의 캠페인</p>
        <Link to="/campaign" className={styles.campaignlink}>
          캠페인 바로가기 <i className="bi bi-chevron-right"></i>
        </Link>

        <Carousel responsive={responsive}>
          {campaigns.map((campaign) => {
            const endDate = moment(campaign.endDate);
            const today = moment();
            const dDay = endDate.diff(today, 'days');

            const donationPercent = Math.floor((campaign.nowAmount / campaign.goalAmount) * 100);

            return (
              <div key={campaign.id} className={styles.campaignDetails}>
                <img className={styles.campaignImage} src={`/assets/${campaign.id}.png`} alt="Campaign Image" />
                <p className={styles.campaignText}>{campaign.title}</p>
                <div className={styles.campaignInfo}>
                  <p className={styles.campaignDays}>D-{dDay}</p>
                  <p className={styles.campaignAmount}>{campaign.nowAmount.toLocaleString()}원</p>
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
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Main;
