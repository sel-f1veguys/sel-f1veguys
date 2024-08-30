import React from 'react';
import CampaignSlide from './CampaignSlide';
import { useParams } from 'react-router-dom';
import styles from './Campaign.module.css'; // Assuming you will create a Campaign.module.css file

const Campaign = () => {
  const { campaignId } = useParams();

  return (
    <div className={styles.campaignContainer}>
      <iframe
        src="https://www.shinhancard.com/pconts/html/benefit/event/1227874_2239.html"
        title="Shinhan Card Event"
        className={styles.iframe}
      >
      </iframe>
      <CampaignSlide className={styles.campaignSlide} />
    </div>
  );
};

export default Campaign;
