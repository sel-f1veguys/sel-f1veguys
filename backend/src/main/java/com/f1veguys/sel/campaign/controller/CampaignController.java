package com.f1veguys.sel.campaign.controller;

import com.f1veguys.sel.campaign.dto.CampaignResponse;
import com.f1veguys.sel.campaign.domain.Campaign;
import com.f1veguys.sel.campaign.service.CampaignService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/campaigns")
@RequiredArgsConstructor
public class CampaignController {

    private final CampaignService campaignService;

    @PostMapping
    @Operation(summary = "캠페인 생성", description = "관리자가 캠페인을 생성합니다")
    public ResponseEntity<CampaignResponse> createCampaign(
            @RequestPart("campaign") Campaign campaign,
            @RequestPart("files") List<MultipartFile> files) throws IOException {
        CampaignResponse campaignResponse = campaignService.createCampaign(campaign, files);
        return ResponseEntity.ok(campaignResponse);
    }

    @PutMapping("/{campaignId}")
    @Operation(summary = "캠페인 수정", description = "관리자가 캠페인을 수정합니다")
    public ResponseEntity<CampaignResponse> updateCampaign(
            @PathVariable("campaignId") int id,
            @RequestBody Campaign campaign) {
        CampaignResponse updatedCampaign = campaignService.updateCampaign(id, campaign);
        return ResponseEntity.ok(updatedCampaign);
    }

    @DeleteMapping("/{campaignId}")
    @Operation(summary = "캠페인 삭제", description = "관리자가 캠페인을 삭제합니다")
    public ResponseEntity<Void> deleteCampaign(@PathVariable("campaignId") int id) {
        campaignService.deleteCampaign(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{campaignId}/complete")
    @Operation(summary = "캠페인 만료처리", description = "진행 기간이 만료된 캠페인을 만료 처리합니다.")
    public ResponseEntity<Void> completeCampaign(@PathVariable("campaignId") int id) {
        campaignService.completeCampaign(id);
        return ResponseEntity.ok().build();
    }

    /*
    캠페인 조회 : 무한 스크롤
     */
    @GetMapping
    @Operation(summary = "전체 캠페인 조회", description = "전체 캠페인을 조회합니다.")
    public ResponseEntity<Slice<CampaignResponse>> getAllCampaigns(Pageable pageable) {
        Slice<CampaignResponse> campaigns = campaignService.getAllCampaigns(pageable);
        return ResponseEntity.ok(campaigns);
    }

    @GetMapping("/ongoing")
    @Operation(summary = "진행중인 캠페인 조회", description = "진행중인 캠페인을 조회합니다.")
    public ResponseEntity<Slice<CampaignResponse>> getOngoingCampaigns(Pageable pageable) {
        Slice<CampaignResponse> campaigns = campaignService.getOngoingCampaigns(pageable);
        return ResponseEntity.ok(campaigns);
    }

    @GetMapping("/completed")
    @Operation(summary = "만료 캠페인 조회", description = "진행 기간이 만료된 캠페인을 조회합니다.")
    public ResponseEntity<Slice<CampaignResponse>> getCompletedCampaigns(Pageable pageable) {
        Slice<CampaignResponse> campaigns = campaignService.getCompletedCampaigns(pageable);
        return ResponseEntity.ok(campaigns);
    }

}
