package com.f1veguys.sel.campaign.service;

import com.f1veguys.sel.campaign.domain.Campaign;
import com.f1veguys.sel.campaign.dto.CampaignResponse;
import com.f1veguys.sel.campaign.repository.CampaignRepository;
import com.f1veguys.sel.file.domain.File;
import com.f1veguys.sel.file.dto.FileResponse;
import com.f1veguys.sel.file.service.FileService;
import com.f1veguys.sel.global.error.exception.CampaignNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class CampaignServiceImpl implements CampaignService {

    private final CampaignRepository campaignRepository;
    private final FileService fileService;

    @Override
    public CampaignResponse createCampaign(Campaign campaign, List<MultipartFile> files) throws IOException {
        // 캠페인 저장
        Campaign savedCampaign = campaignRepository.save(campaign);

        // 파일 저장 및 파일 엔티티 생성
        List<File> savedFiles = files.stream()
                .map(file -> {
                    try {
                        return fileService.saveFile(file, savedCampaign);
                    } catch (IOException e) {
                        throw new RuntimeException("Failed to save file", e);
                    }
                })
                .collect(Collectors.toList());

        // 파일 엔티티를 캠페인에 연결
        savedCampaign.getFiles().addAll(savedFiles);

        return new CampaignResponse(savedCampaign);
    }

    // 캠페인 수정
    @Override
    public CampaignResponse updateCampaign(int id, Campaign updatedCampaign) {
        Campaign existingCampaign = campaignRepository.findById(id)
                .orElseThrow(CampaignNotFoundException::new);

        existingCampaign = existingCampaign.toBuilder()
                .title(updatedCampaign.getTitle())
                .goalAmount(updatedCampaign.getGoalAmount())
                .nowAmount(updatedCampaign.getNowAmount())
                .completed(updatedCampaign.isCompleted())
                .build();

        Campaign savedCampaign = campaignRepository.save(existingCampaign);
        return new CampaignResponse(savedCampaign);
    }

    // 캠페인 삭제
    @Override
    public void deleteCampaign(int id) {
        Campaign existingCampaign = campaignRepository.findById(id)
                .orElseThrow(CampaignNotFoundException::new);
        campaignRepository.delete(existingCampaign);
    }

    // 전체 캠페인 조회
    @Override
    @Transactional(readOnly = true)
    public Slice<CampaignResponse> getAllCampaigns(Pageable pageable) {
        return campaignRepository.findAll(pageable)
                .map(CampaignResponse::new);
    }


    // 진행 중인 캠페인 조회
    @Override
    @Transactional(readOnly = true)
    public Slice<CampaignResponse> getOngoingCampaigns(Pageable pageable) {
        return campaignRepository.findByCompletedFalse(pageable)
                .map(campaign -> new CampaignResponse(
                        campaign.getId(),
                        campaign.getTitle(),
                        campaign.getGoalAmount(),
                        campaign.getNowAmount(),
                        campaign.isCompleted(),
                        campaign.getFiles().stream()
                                .map(file -> new FileResponse(file.getFileId(), file.getPath(), file.getName(), file.getType()))
                                .collect(Collectors.toList())
                ));
    }

    // 마감된 캠페인 조회 (무한 스크롤용)
    @Override
    @Transactional(readOnly = true)
    public Slice<CampaignResponse> getCompletedCampaigns(Pageable pageable) {
        return campaignRepository.findByCompletedTrue(pageable)
                .map(campaign -> new CampaignResponse(
                        campaign.getId(),
                        campaign.getTitle(),
                        campaign.getGoalAmount(),
                        campaign.getNowAmount(),
                        campaign.isCompleted(),
                        campaign.getFiles().stream()
                                .map(file -> new FileResponse(file.getFileId(), file.getPath(), file.getName(), file.getType()))
                                .collect(Collectors.toList())
                ));
    }

    @Override
    public void completeCampaign(int id) {
        Campaign campaign = campaignRepository.findById(id)
                .orElseThrow(CampaignNotFoundException::new);

        if (campaign.getEndDate() != null && campaign.getEndDate().isAfter(LocalDateTime.now())) {
            campaign = campaign.toBuilder()
                    .completed(true)
                    .build();
            campaignRepository.save(campaign);
        }
    }

}
