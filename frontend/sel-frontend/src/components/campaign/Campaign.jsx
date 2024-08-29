import React from 'react';
import CampaignSlide from './CampaignSlide';
import { useParams } from 'react-router-dom';
// import styles from './Navbar.module.css';

const Campaign = () => {
  const { campaignId } = useParams();

  return (
    <div>
      <img src={`/assets/${campaignId}_detail.png`} alt="Campaign Image" />
      <CampaignSlide />
    </div>
  );
};

export default Campaign;
