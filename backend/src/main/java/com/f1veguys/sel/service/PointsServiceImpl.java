package com.f1veguys.sel.service;

import com.f1veguys.sel.domain.Points;
import com.f1veguys.sel.repository.PointsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PointsServiceImpl implements PointsService{

    private final PointsRepository pointsRepository;
    @Override
    public int addPoints(int userId, int amount) {
        return pointsRepository.addBalance(userId, amount);
    }

    @Override
    public Points getPoints(int userId) {
        return null;
    }

    @Override
    public int removePoints(int userId, int amount) {
        return pointsRepository.removeBalance(userId, amount);
    }
}
