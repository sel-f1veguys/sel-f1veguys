package com.f1veguys.sel.domain.spendinghistory.service;

import com.f1veguys.sel.domain.ecocompany.repository.EcoCompanyRepository;
import com.f1veguys.sel.domain.points.service.PointsService;
import com.f1veguys.sel.domain.pointshistory.service.PointsHistoryService;
import com.f1veguys.sel.domain.spendinghistory.domain.SpendingHistory;
import com.f1veguys.sel.dto.Operation;
import com.f1veguys.sel.dto.StatisticsResponse;
import com.f1veguys.sel.domain.spendinghistory.repository.SpendingHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class SpendingHistoryServiceImpl implements SpendingHistoryService{
    private final SpendingHistoryRepository spendingHistoryRepository;
    private final EcoCompanyRepository ecoCompanyRepository;
    private final PointsService pointsService;
    private final PointsHistoryService pointsHistoryService;
    @Override
    public StatisticsResponse getStatistics(int userId, int period) {
        LocalDateTime endDate = LocalDateTime.now();
        LocalDateTime startDate = endDate.minusDays(period);
        int totalAmount = spendingHistoryRepository.getTotalAmount(userId, startDate, endDate);
        int ecoAmount = spendingHistoryRepository.getEcoAmount(userId, startDate, endDate);
        return new StatisticsResponse(totalAmount, ecoAmount);
    }

    @Override
    public void saveSpendingHistory(int userId, int amount, String description) {
        SpendingHistory spendingHistory = new SpendingHistory(userId, amount, description);
        if(ecoCompanyRepository.existsByName(description)){
            spendingHistory.setIsEco(true);
            pointsService.addPoints(userId, (int)(amount*0.005d));
            pointsHistoryService.savePointsHistory(userId, Operation.EARN, (int)(amount*0.005d), "친환경 소비 : "+description);
        }
        spendingHistoryRepository.save(spendingHistory);
    }
}
