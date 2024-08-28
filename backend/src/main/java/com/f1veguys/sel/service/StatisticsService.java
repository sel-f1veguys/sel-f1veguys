package com.f1veguys.sel.service;

import com.f1veguys.sel.dto.StatisticsResponse;

public interface StatisticsService {
    public StatisticsResponse getStatistics(int userId, int period);

}
