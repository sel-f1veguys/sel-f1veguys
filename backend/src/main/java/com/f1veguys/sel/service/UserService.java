package com.f1veguys.sel.service;

import com.f1veguys.sel.domain.LoginRequest;
import com.f1veguys.sel.domain.User;

public interface UserService {
    User register(User user);

    String login(LoginRequest loginRequest);
}
