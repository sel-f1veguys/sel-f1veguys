package com.f1veguys.sel.domain.campaignhistory.service;

import com.f1veguys.sel.domain.campaignhistory.domain.CampaignHistory;

import java.util.List;

public interface CampaignHistoryService {
    CampaignHistory participateInCampaign(int campaignId, int userId, int contributionAmount);

    List<CampaignHistory> getAllCampaigns(int userId);

}
