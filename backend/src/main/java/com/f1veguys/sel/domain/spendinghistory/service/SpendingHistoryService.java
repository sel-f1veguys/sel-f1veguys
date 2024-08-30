package com.f1veguys.sel.domain.spendinghistory.service;

import com.f1veguys.sel.domain.spendinghistory.domain.SpendingHistory;
import com.f1veguys.sel.dto.StatisticsResponse;

public interface SpendingHistoryService {
    public StatisticsResponse getStatistics(int userId, int period);
    public void saveSpendingHistory(int userId, int amount, String description);

}
