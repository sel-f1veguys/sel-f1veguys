package com.f1veguys.sel.domain.campaignhistory.service;

import com.f1veguys.sel.domain.campaignhistory.domain.CampaignHistory;

public interface CampaignHistoryService {
    CampaignHistory participateInCampaign(int campaignId, int userId, int contributionAmount);
}
