package com.f1veguys.sel.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "Points")
public class Points {
    @Id
    @Column(name = "users_id")
    private int userId;

    private Integer balance;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "users_id", insertable = false, updatable = false)
    private User user;
}