package com.f1veguys.sel.service;

import com.f1veguys.sel.domain.Operation;
import com.f1veguys.sel.domain.PointsHistory;
import com.f1veguys.sel.repository.PointsHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PointsHistoryServiceImpl implements PointsHistoryService {
    private final PointsHistoryRepository pointsHistoryRepository;
    @Override
    public void savePointsHistory(int userId, Operation action, int amount, String description) {
        PointsHistory pointsHistory = new PointsHistory(userId, action, amount, description);
        pointsHistoryRepository.save(pointsHistory);
    }
}
