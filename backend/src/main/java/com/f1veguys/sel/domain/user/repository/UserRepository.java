package com.f1veguys.sel.domain.user.repository;


import com.f1veguys.sel.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
