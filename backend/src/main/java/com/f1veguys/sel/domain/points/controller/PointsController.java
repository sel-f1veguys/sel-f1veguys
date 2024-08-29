package com.f1veguys.sel.domain.points.controller;

import com.f1veguys.sel.domain.points.domain.Points;
import com.f1veguys.sel.repository.PointsRepository;
import com.f1veguys.sel.global.util.HeaderUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/points")
@Slf4j
@RequiredArgsConstructor
public class PointsController {
    private final PointsRepository pointsRepository;
    private final HeaderUtil headerUtil;

    @GetMapping
    public List<Points> getAllPoints() {
        Map<String, String> request = headerUtil.createHeader("name","code");
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("http://localhost:8080/points", List.class);

    }
}
