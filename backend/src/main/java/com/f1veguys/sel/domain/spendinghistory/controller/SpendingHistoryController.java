package com.f1veguys.sel.domain.spendinghistory.controller;

import com.f1veguys.sel.domain.spendinghistory.service.SpendingHistoryService;
import com.f1veguys.sel.dto.StatisticsResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/statistics")
@Slf4j
@RequiredArgsConstructor
public class SpendingHistoryController {
    private final SpendingHistoryService spendingHistoryService;

    @GetMapping({"", "/{period}"})
    public ResponseEntity<?> getStatistics(@PathVariable(value = "period", required = false) Integer period, HttpServletRequest request) {
        int userId = request.getIntHeader("userId");
        int actualPeriod = period != null ? period : 30;
        StatisticsResponse statisticsResponse = spendingHistoryService.getStatistics(userId, actualPeriod);
        return ResponseEntity.status(HttpStatus.OK).body(statisticsResponse);
    }
}