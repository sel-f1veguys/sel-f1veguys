package com.f1veguys.sel.domain.pointshistory.service;

import com.f1veguys.sel.dto.Operation;

public interface PointsHistoryService {
    public void savePointsHistory(int userId, Operation action, int amount, String description);
}
