package com.f1veguys.sel.campaign.dto;

import com.f1veguys.sel.file.dto.FileResponse;
import com.f1veguys.sel.campaign.domain.Campaign;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public record CampaignResponse(
        int id,
        String title,
        int goalAmount,
        int nowAmount,
        boolean completed,
        LocalDateTime uploadDate
) {
    public CampaignResponse(Campaign campaign) {
        this(
                campaign.getId(),
                campaign.getTitle(),
                campaign.getGoalAmount(),
                campaign.getNowAmount(),
                campaign.isCompleted(),
                campaign.getUploadDate()
        );
    }
}
