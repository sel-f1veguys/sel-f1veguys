package com.f1veguys.sel.campaignhistory.service;

import com.f1veguys.sel.campaignhistory.domain.CampaignHistory;

public interface CampaignHistoryService {
    CampaignHistory participateInCampaign(int campaignId, int userId, int contributionAmount);
}
