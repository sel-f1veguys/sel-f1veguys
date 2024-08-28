package com.f1veguys.sel.service;

import com.f1veguys.sel.domain.Points;

public interface PointsService {
    public int addPoints(int userId, int amount);
    public Points getPoints(int userId);
    public int removePoints(int userId, int amount);
}
