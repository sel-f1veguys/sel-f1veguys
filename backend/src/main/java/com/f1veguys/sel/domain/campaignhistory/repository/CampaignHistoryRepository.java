package com.f1veguys.sel.domain.campaignhistory.repository;

import com.f1veguys.sel.domain.campaignhistory.domain.CampaignHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampaignHistoryRepository extends JpaRepository<CampaignHistory, CampaignHistory.CampaignHistoryId> {
}
