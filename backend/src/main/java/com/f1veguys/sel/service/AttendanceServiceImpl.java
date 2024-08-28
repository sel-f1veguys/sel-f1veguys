package com.f1veguys.sel.service;

import com.f1veguys.sel.domain.Attendance;
import com.f1veguys.sel.repository.AttendanceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AttendanceServiceImpl implements AttendanceService{
    private final AttendanceRepository attendanceRepository;

    @Override
    public void attend(int userId) {
        Attendance attendance = new Attendance();
        attendance.setUserId(userId);
        attendance.setAttendanceDate(LocalDateTime.now());
        attendanceRepository.save(attendance);
    }

    @Override
    public List<Integer> getAttendance(int userId) {
        List<Integer> attendanceList = new ArrayList<>();
        attendanceList = attendanceRepository.findAttendanceDaysForCurrentMonth(userId, LocalDateTime.now());
        Collections.sort(attendanceList);
        return attendanceList;
    }

    @Override
    public boolean checkToday(List<Integer> attendance) {
        int today = LocalDateTime.now().getDayOfMonth();
        return attendance.get(attendance.size() - 1) != today;
    }
}
