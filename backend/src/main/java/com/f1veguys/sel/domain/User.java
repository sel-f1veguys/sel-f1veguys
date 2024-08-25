package com.f1veguys.sel.domain;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "users_id")
    private int userId;

    private String email;
    private String name;
    private String password;
    private Boolean admin;

    @Column(name = "api_id")
    private String apiId;

    @Column(name = "created_date")
    private LocalDateTime createdDate;

    @Column(name = "account_num")
    private String accountNum;
}