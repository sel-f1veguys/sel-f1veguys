package com.f1veguys.sel.campaign.service;

import com.f1veguys.sel.campaign.domain.Campaign;
import com.f1veguys.sel.campaign.dto.CampaignResponse;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface CampaignService {
    CampaignResponse createCampaign(Campaign campaign, List<MultipartFile> files) throws IOException;

    CampaignResponse updateCampaign(int id, Campaign updatedCampaign);

    void deleteCampaign(int id);

    Slice<CampaignResponse> getAllCampaigns(Pageable pageable);

    Slice<CampaignResponse> getOngoingCampaigns(Pageable pageable);

    Slice<CampaignResponse> getCompletedCampaigns(Pageable pageable);

    void completeCampaign(int id);
}
