package com.f1veguys.sel.file.domain;

import com.f1veguys.sel.campaign.domain.Campaign;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "files")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder(toBuilder = true)
@Setter
@Getter
public class File {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "files_id")
    private int fileId;

    @Column(nullable = false)
    private String path;

    @Column(length = 100, nullable = false)
    private String name;

    @Column(length = 25, nullable = false)
    private String type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "campaign_id")
    private Campaign campaign;

    @CreationTimestamp
    private LocalDateTime uploadDate;
}
