package com.f1veguys.sel.service;

import com.f1veguys.sel.domain.Operation;
import com.f1veguys.sel.domain.PointsHistory;

public interface PointsHistoryService {
    public void savePointsHistory(int userId, Operation action, int amount, String description);
}
