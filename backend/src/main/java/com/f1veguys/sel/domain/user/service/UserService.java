package com.f1veguys.sel.domain.user.service;

import com.f1veguys.sel.dto.LoginRequest;
import com.f1veguys.sel.domain.user.domain.User;

public interface UserService {
    User register(User user);

    String login(LoginRequest loginRequest);
}
