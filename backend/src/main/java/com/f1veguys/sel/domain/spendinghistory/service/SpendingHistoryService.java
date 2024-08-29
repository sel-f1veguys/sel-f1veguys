package com.f1veguys.sel.domain.spendinghistory.service;

import com.f1veguys.sel.dto.StatisticsResponse;

public interface SpendingHistoryService {
    public StatisticsResponse getStatistics(int userId, int period);

}
