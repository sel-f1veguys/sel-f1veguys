package com.f1veguys.sel.repository;

import com.f1veguys.sel.domain.Points;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpendingHistoryRepository extends JpaRepository<Points, Integer> {
}
