package com.f1veguys.sel.points.domain;

import com.f1veguys.sel.user.domain.User;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Points")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder(toBuilder = true)
@Getter
public class Points {
    @Id
    @Column(name = "users_id")
    private int userId;

    private Integer balance;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "users_id", insertable = false, updatable = false)
    private User user;
}