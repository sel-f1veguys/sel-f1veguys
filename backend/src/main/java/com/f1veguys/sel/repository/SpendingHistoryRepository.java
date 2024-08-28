package com.f1veguys.sel.repository;

import com.f1veguys.sel.domain.Points;
import com.f1veguys.sel.domain.SpendingHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpendingHistoryRepository extends JpaRepository<SpendingHistory, Integer> {
}
