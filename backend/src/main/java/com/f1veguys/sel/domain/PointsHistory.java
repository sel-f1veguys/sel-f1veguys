package com.f1veguys.sel.domain;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
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
}