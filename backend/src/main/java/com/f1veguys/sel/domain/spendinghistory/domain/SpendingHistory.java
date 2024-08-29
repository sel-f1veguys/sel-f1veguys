package com.f1veguys.sel.domain.spendinghistory.domain;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "Spending_History")
public class SpendingHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "spend_id")
    private int spendId;

    @Column(name = "users_id")
    private int userId;

    @Column(name = "spend_time")
    private LocalDateTime spendTime;

    private Integer amount;

    @Column(name = "is_eco")
    private Boolean isEco;

    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "users_id", insertable = false, updatable = false)
    private User user;
}