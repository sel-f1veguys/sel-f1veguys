package com.f1veguys.sel.controller;

import com.f1veguys.sel.dto.StatisticsResponse;
import com.f1veguys.sel.service.StatisticsService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/statistics")
@Slf4j
@RequiredArgsConstructor
public class StatisticsController {
    private final StatisticsService statisticsService;

    @GetMapping({"", "/{period}"})
    public ResponseEntity<?> getStatistics(@PathVariable(value = "period", required = false) Integer period, HttpServletRequest request) {
        int userId = request.getIntHeader("userId");
        int actualPeriod = period != null ? period : 30;
        StatisticsResponse statisticsResponse = statisticsService.getStatistics(userId, actualPeriod);
        return ResponseEntity.status(HttpStatus.OK).body(statisticsResponse);
    }
}
