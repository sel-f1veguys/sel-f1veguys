package com.f1veguys.sel.domain.pointshistory.repository;

import com.f1veguys.sel.domain.pointshistory.domain.PointsHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PointsHistoryRepository extends JpaRepository<PointsHistory, Integer> {
}
