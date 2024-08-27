package com.f1veguys.sel.campaignhistory.repository;

import com.f1veguys.sel.campaignhistory.domain.CampaignHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampaignHistoryRepository extends JpaRepository<CampaignHistory, CampaignHistory.CampaignHistoryId> {
}
