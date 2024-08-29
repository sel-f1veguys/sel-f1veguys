package com.f1veguys.sel.domain.campaign.dto;

import com.f1veguys.sel.domain.campaign.domain.Campaign;

import java.time.LocalDateTime;

public record CampaignResponse(
        int id,
        String title,
        int goalAmount,
        int nowAmount,
        LocalDateTime startDate,
        LocalDateTime endDate,
        LocalDateTime uploadDate
) {
    public CampaignResponse(Campaign campaign) {
        this(
                campaign.getId(),
                campaign.getTitle(),
                campaign.getGoalAmount(),
                campaign.getNowAmount(),
                campaign.getStartDate(),
                campaign.getEndDate(),
                campaign.getUploadDate()
        );
    }
}
