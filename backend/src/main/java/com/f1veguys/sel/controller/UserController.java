package com.f1veguys.sel.controller;

import com.f1veguys.sel.domain.LoginRequest;
import com.f1veguys.sel.domain.User;
import com.f1veguys.sel.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // 회원가입 API
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    // 로그인 API
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) { //로그인 성공시 UniqueNo 반환
        System.out.println("통과");
        return userService.login(loginRequest);
    }
}
