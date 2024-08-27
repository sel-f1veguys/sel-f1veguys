package com.f1veguys.sel.campaign.dto;

import com.f1veguys.sel.file.dto.FileResponse;
import com.f1veguys.sel.campaign.domain.Campaign;

import java.util.List;
import java.util.stream.Collectors;

public record CampaignResponse(
        int id,
        String title,
        int goalAmount,
        int nowAmount,
        boolean completed,
        List<FileResponse> files
) {
    public CampaignResponse(Campaign campaign) {
        this(
                campaign.getId(),
                campaign.getTitle(),
                campaign.getGoalAmount(),
                campaign.getNowAmount(),
                campaign.isCompleted(),
                campaign.getFiles().stream()
                        .map(FileResponse::new)
                        .collect(Collectors.toList())
        );
    }
}
