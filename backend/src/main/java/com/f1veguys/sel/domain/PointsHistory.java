package com.f1veguys.sel.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "Points_History")
public class PointsHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "points_id")
    private int pointsId;

    @Column(name = "users_id")
    private int userId;

    @Enumerated(EnumType.STRING)
    private Operation operation;

    private String description;

    @Column(name = "created_time")
    private LocalDateTime createdTime;

    private Integer amount;

    @ManyToOne
    @JoinColumn(name = "users_id", insertable = false, updatable = false)
    private User user;

    @Builder
    public PointsHistory(int userId, Operation action, int amount, String description){
        this.userId = userId;
        this.operation = action;
        this.amount = amount;
        this.description = description;
        this.createdTime = LocalDateTime.now();
    }
}