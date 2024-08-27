package com.f1veguys.sel.campaignhistory.domain;

import com.f1veguys.sel.campaign.domain.Campaign;
import com.f1veguys.sel.user.domain.User;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Table(name = "campaign_history")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder(toBuilder = true)
@Getter
@Setter
@IdClass(CampaignHistory.CampaignHistoryId.class)
public class CampaignHistory {
    @Id
    @Column(name = "campaign_id")
    private int campaignId;

    @Id
    @Column(name = "user_id")
    private int userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "campaign_id", nullable = false)
    private Campaign campaign;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "amount")
    private int amount;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @EqualsAndHashCode
    public static class CampaignHistoryId implements Serializable {
        private int campaignId;
        private int userId;
    }
}
