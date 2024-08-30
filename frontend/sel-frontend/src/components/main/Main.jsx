    import React, { useEffect, useState } from "react";
    import { useNavigate, Link } from 'react-router-dom';
    import styles from './Main.module.css';
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import ProgressLine from './ProgressLine';
    import axios from 'axios';
    import moment from 'moment';
    import { Carousel } from 'react-responsive-carousel';
    import 'react-responsive-carousel/lib/styles/carousel.min.css'; // 스타일을 import합니다.

    const Main = () => {
      const navigate = useNavigate();
      const [campaigns, setCampaigns] = useState([]);
      const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 상태 추가
      const [imagesLoaded, setImagesLoaded] = useState(false); // 이미지 로드 상태 추가

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

      // 이미지가 로드된 후 상태를 true로 변경
      useEffect(() => {
        if (campaigns.length > 0) {
          const imagePromises = campaigns.map((campaign) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = `/assets/${campaign.id}.png`;
              img.onload = resolve;
              img.onerror = resolve;
            });
          });

          Promise.all(imagePromises).then(() => {
            setImagesLoaded(true);
          });
        }
      }, [campaigns]);

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
            <p className={styles.campaignTitle}>캠페인 모아보기</p>

            {imagesLoaded ? (
              <div>

            <Link 
              to={`/campaign/${campaigns[currentSlide]?.id}`} // URL에 campaign.id를 포함시킴
              className={styles.campaignlink}
            >
              캠페인 바로가기 <i className="bi bi-chevron-right"></i>
            </Link>
              <Carousel
                showThumbs={false} 
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                className={styles.carouselContainer}
                selectedItem={currentSlide} // 현재 슬라이드를 설정
                onChange={(index) => setCurrentSlide(index)} // 슬라이드 변경 시 currentSlide 업데이트
              >
                {campaigns.map((campaign) => {
                  const endDate = moment(campaign.endDate);
                  const today = moment();
                  const dDay = endDate.diff(today, 'days');

                  const donationPercent = Math.floor((campaign.nowAmount / campaign.goalAmount) * 100);

                  return (
                    <div key={campaign.id} className={styles.campaignDetails}>
                      <Link 
              to={`/campaign/${campaigns[currentSlide]?.id}`} // URL에 campaign.id를 포함시킴
              className={styles.campaignlink}
            >
                      <img className={styles.campaignImage} src={`/assets/${campaign.id}.png`} alt="Campaign Image" />
                      <p className={styles.campaignText}>{campaign.title}</p>
            </Link>
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
            ) : (
              <div className={styles.loadingcontainer}>
                <div className={styles.spinner}></div>
              </div>
            )}
          </div>
        </div>
      );
    };

    export default Main;
