package com.f1veguys.sel.tree.repository;

import com.f1veguys.sel.tree.domain.Tree;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TreeRepository extends JpaRepository<Tree, Integer> {

    Optional<Tree> findByUser_Id(int userId);

}
