package com.f1veguys.sel.service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.f1veguys.sel.domain.LoginRequest;
import com.f1veguys.sel.domain.User;
import com.f1veguys.sel.repository.UserRepository;
import com.f1veguys.sel.util.UniqueNoGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User register(User user) {
        // 생성 날짜 설정
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCreatedDate(LocalDateTime.now());
        // 회원 정보 저장
        return userRepository.save(user);
    }

    @Override
    public String login(LoginRequest loginRequest) {
        // 이메일로 사용자 찾기
        userRepository.findByEmail(loginRequest.getEmail())
                .filter(u -> passwordEncoder.matches(loginRequest.getPassword(), u.getPassword())) // 비밀번호 비교
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        return UniqueNoGenerator.generateUniqueNo();
    }
}
