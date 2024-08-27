package com.f1veguys.sel.campaignhistory.controller;

import com.f1veguys.sel.campaignhistory.domain.CampaignHistory;
import com.f1veguys.sel.campaignhistory.service.CampaignHistoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/campaignhistory")
@Tag(name = "CampaignHistoryController", description = "캠페인 참여 API")
public class CampaignHistoryController {

    private final CampaignHistoryService campaignHistoryService;

    @PostMapping("/participate")
    @Operation(summary = "캠페인 참여", description = "사용자가 특정 캠페인에 참여합니다.")
    public ResponseEntity<CampaignHistory> participateInCampaign(
            @RequestParam int campaignId,
            @RequestParam int userId,
            @RequestParam int pay) {
        CampaignHistory campaignHistory = campaignHistoryService.participateInCampaign(campaignId, userId, pay);
        return ResponseEntity.ok(campaignHistory);
    }
}
