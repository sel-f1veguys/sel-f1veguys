package com.f1veguys.sel.service;

import com.f1veguys.sel.domain.Attendance;

import java.util.List;

public interface AttendanceService {
    public void attend(int userId);
    public List<Integer> getAttendance(int userId);
    public boolean checkToday(List<Integer> attendance);
}
