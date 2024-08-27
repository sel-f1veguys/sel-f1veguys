package com.f1veguys.sel.campaignhistory.service;

import com.f1veguys.sel.campaign.domain.Campaign;
import com.f1veguys.sel.campaignhistory.domain.CampaignHistory;
import com.f1veguys.sel.campaignhistory.repository.CampaignHistoryRepository;
import com.f1veguys.sel.campaign.repository.CampaignRepository;
import com.f1veguys.sel.global.error.exception.CampaignNotFoundException;
import com.f1veguys.sel.global.error.exception.PointsNotFoundException;
import com.f1veguys.sel.global.error.exception.UserNotFoundException;
import com.f1veguys.sel.points.domain.Points;
import com.f1veguys.sel.points.repository.PointsRepository;
import com.f1veguys.sel.user.domain.User;
import com.f1veguys.sel.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class CampaignHistoryServiceImpl implements CampaignHistoryService {

    private final CampaignHistoryRepository campaignHistoryRepository;
    private final CampaignRepository campaignRepository;
    private final UserRepository userRepository;
    private final PointsRepository pointsRepository;

    @Override
    public CampaignHistory participateInCampaign(int campaignId, int userId, int pay) {

        Campaign campaign = campaignRepository.findById(campaignId)
                .orElseThrow(CampaignNotFoundException::new);
        User user = userRepository.findById(userId)
                .orElseThrow(UserNotFoundException::new);

        Points userPoints = pointsRepository.findByUserId(userId)
                .orElseThrow(PointsNotFoundException::new);

        if (pay > userPoints.getBalance()) {
            throw new PointsNotFoundException();
        }

        CampaignHistory.CampaignHistoryId historyId = new CampaignHistory.CampaignHistoryId(campaignId, userId);

        CampaignHistory history = campaignHistoryRepository.findById(historyId).orElse(null);

        if (history == null) {
            history = CampaignHistory.builder()
                    .campaignId(campaignId)
                    .userId(userId)
                    .campaign(campaign)
                    .user(user)
                    .amount(pay)
                    .build();
        } else {
            history = history.toBuilder()
                    .amount(history.getAmount() + pay)
                    .build();
        }

        campaign = campaign.toBuilder()
                .nowAmount(campaign.getNowAmount() + pay)
                .build();
        campaignRepository.save(campaign);

        userPoints = userPoints.toBuilder()
                .balance(userPoints.getBalance() - pay)
                .build();
        pointsRepository.save(userPoints);

        return campaignHistoryRepository.save(history);
    }
}
