package com.f1veguys.sel.repository;

import com.f1veguys.sel.domain.Points;
import com.f1veguys.sel.domain.SpendingHistory;
import com.f1veguys.sel.dto.StatisticsResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;

public interface SpendingHistoryRepository extends JpaRepository<SpendingHistory, Integer> {
    @Query("SELECT COALESCE(SUM(sh.amount), 0) " +
            "FROM SpendingHistory sh " +
            "WHERE sh.userId = :userId AND sh.spendTime >= :startDate AND sh.spendTime < :endDate")
    int getTotalAmount(@Param("userId") int userId,
                       @Param("startDate") LocalDateTime startDate,
                       @Param("endDate") LocalDateTime endDate);

    @Query("SELECT COALESCE(SUM(CASE WHEN sh.isEco = true THEN sh.amount ELSE 0 END), 0) " +
            "FROM SpendingHistory sh " +
            "WHERE sh.userId = :userId AND sh.spendTime >= :startDate AND sh.spendTime < :endDate")
    int getEcoAmount(@Param("userId") int userId,
                     @Param("startDate") LocalDateTime startDate,
                     @Param("endDate") LocalDateTime endDate);
}
