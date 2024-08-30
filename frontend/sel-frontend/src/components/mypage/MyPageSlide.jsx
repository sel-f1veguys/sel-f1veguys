import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MyPageSlide.module.css';
import ProgressLine from '../main/ProgressLine';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyPageSlide = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch campaigns
    const fetchedCampaigns = [
      { id: 1, image: "/assets/green1.png", title: "미래 세대의 숲을 지켜주세요", daysLeft: 35, amount: 2812379, percent: 80, userPoints: 1000 },
      { id: 2, image: "/assets/green2.png", title: "바다를 깨끗이 합시다", daysLeft: 20, amount: 1500000, percent: 60, userPoints: 500 },
      { id: 3, image: "/assets/green3.png", title: "재활용으로 지구를 살리자", daysLeft: 45, amount: 3000000, percent: 40, userPoints: 750 },
    ];
    setCampaigns(fetchedCampaigns);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className={styles.campaignContainer}>
      <div className={styles.campaignHeader}>
        <p className={styles.campaignTitle}>참여한 캠페인</p>
        <Link to="/campaign" className={styles.campaignlink}>
          캠페인 바로가기 <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
      <Carousel  {...settings}>
        {campaigns.map((campaign, index) => (
          <div key={campaign.id} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <img className={styles.campaignImage} src={campaign.image} alt={`Campaign ${index + 1}`} />
            </div>
            <div className={styles.campaignDetails}>
              <p className={styles.campaignText}>{campaign.title}</p>
              <div className={styles.campaignInfo}>
                <p className={styles.campaignDays}>d-{campaign.daysLeft}</p>
                <p className={styles.campaignAmount}>{campaign.amount.toLocaleString()}원</p>
              </div>
              <p className={styles.campaignProgress}>{campaign.percent}%</p>
              <ProgressLine
                visualParts={[
                  {
                    percentage: `${campaign.percent}%`,
                    color: "#008DFF"
                  }
                ]}
              />
              <div className={styles.userPoints}>
                <p>소비한 포인트: {campaign.userPoints.toLocaleString()} P</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyPageSlide;