package com.f1veguys.sel.campaign.domain;

import com.f1veguys.sel.file.domain.File;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "campaign")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder(toBuilder = true)
@Getter
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "campaign_id")
    private int id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "start_date")
    private LocalDateTime startDate;

    @Column(name = "end_date")
    private LocalDateTime endDate;

    @Column(name = "goal_amount", nullable = false)
    private int goalAmount;

    @Column(name = "now_amount", nullable = false)
    private int nowAmount;

    @Column(name = "completed", nullable = false)
    private boolean completed;

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<File> files;

    @CreationTimestamp
    private LocalDateTime uploadDate;
}
