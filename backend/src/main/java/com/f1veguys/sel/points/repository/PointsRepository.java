package com.f1veguys.sel.points.repository;

import com.f1veguys.sel.points.domain.Points;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PointsRepository extends JpaRepository<Points, Integer> {
    Optional<Points> findByUserId(int userId);
}
