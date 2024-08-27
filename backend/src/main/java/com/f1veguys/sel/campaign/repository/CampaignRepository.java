package com.f1veguys.sel.campaign.repository;

import com.f1veguys.sel.campaign.domain.Campaign;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampaignRepository extends JpaRepository<Campaign, Integer> {

    Slice<Campaign> findByCompletedFalse(Pageable pageable);

    Slice<Campaign> findByCompletedTrue(Pageable pageable);

}
