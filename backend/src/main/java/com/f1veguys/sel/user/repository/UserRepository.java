package com.f1veguys.sel.user.repository;


import com.f1veguys.sel.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
