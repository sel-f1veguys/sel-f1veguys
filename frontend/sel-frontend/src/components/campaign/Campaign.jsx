import React, { useRef } from 'react';
import CampaignSlide from './CampaignSlide';
import { useParams } from 'react-router-dom';
import styles from './Campaign.module.css';

const Campaign = () => {
  const { campaignId } = useParams();
  const campaignSlideRef = useRef();

  const handleParticipateClick = () => {
    if (campaignSlideRef.current) {
      campaignSlideRef.current.donateDirectly();
    }
  };

  return (
    <div className={styles.campaignContainer}>
      <iframe
        src="https://www.shinhancard.com/pconts/html/benefit/event/1227874_2239.html"
        title="Shinhan Card Event"
        className={styles.iframe}
      >
      </iframe>

      {/* Button to directly trigger the donate action */}
      <button onClick={handleParticipateClick} className={styles.openModalButton}>
        바로 참여하기
      </button>

      {/* CampaignSlide component */}
      <CampaignSlide ref={campaignSlideRef} className={styles.openModalButton} />

    </div>
  );
};

export default Campaign;
