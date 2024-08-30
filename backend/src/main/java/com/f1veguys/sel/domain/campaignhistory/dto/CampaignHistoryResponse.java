package com.f1veguys.sel.domain.campaignhistory.dto;

import com.f1veguys.sel.domain.campaignhistory.domain.CampaignHistory;

import java.time.LocalDateTime;

public record CampaignHistoryResponse(
        int campaignId,
        int userId,
        int amount,
        boolean completed,
        LocalDateTime attendedDate
) {
    public CampaignHistoryResponse(CampaignHistory campaignHistory, boolean completed) {
        this(campaignHistory.getCampaignId(), campaignHistory.getUserId(), campaignHistory.getAmount(), completed, campaignHistory.getAttendedDate());
    }
}
