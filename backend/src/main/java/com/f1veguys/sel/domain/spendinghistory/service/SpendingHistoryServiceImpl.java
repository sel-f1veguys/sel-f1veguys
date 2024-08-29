package com.f1veguys.sel.domain.spendinghistory.service;

import com.f1veguys.sel.dto.StatisticsResponse;
import com.f1veguys.sel.domain.spendinghistory.repository.SpendingHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class SpendingHistoryServiceImpl implements SpendingHistoryService{
    private final SpendingHistoryRepository spendingHistoryRepository;
    @Override
    public StatisticsResponse getStatistics(int userId, int period) {
        LocalDateTime endDate = LocalDateTime.now();
        LocalDateTime startDate = endDate.minusDays(period);
        int totalAmount = spendingHistoryRepository.getTotalAmount(userId, startDate, endDate);
        int ecoAmount = spendingHistoryRepository.getEcoAmount(userId, startDate, endDate);
        return new StatisticsResponse(totalAmount, ecoAmount);
    }
}
