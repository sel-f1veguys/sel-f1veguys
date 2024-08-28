package com.f1veguys.sel.tree.service;

import com.f1veguys.sel.global.error.exception.*;
import com.f1veguys.sel.global.error.exception.InsufficientPointsException;
import com.f1veguys.sel.global.error.exception.TreeAlmostGrownException;
import com.f1veguys.sel.points.domain.Points;
import com.f1veguys.sel.points.repository.PointsRepository;
import com.f1veguys.sel.tree.domain.Tree;
import com.f1veguys.sel.tree.repository.TreeRepository;
import com.f1veguys.sel.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional
@RequiredArgsConstructor
public class TreeServiceImpl implements TreeService {

    private final TreeRepository treeRepository;
    private final PointsRepository pointsRepository;

    @Override
    public Tree getTree(int userId) {
        return treeRepository.findByUser_Id(userId).orElseThrow(TreeNotFoundException::new);
    }

    @Override
    public Tree startTree(User user) {
        Tree tree = Tree.builder()
                .user(user)
                .grown(false)
                .createdDate(LocalDateTime.now())
                .build();
        return treeRepository.save(tree);
    }

    @Override
    public void endTree(int id) {
        Tree tree = treeRepository.findById(id)
                .orElseThrow(TreeNotFoundException::new);

        if (tree.getCount() == 3000 && !tree.isGrown()) {

            tree.setGrown(true);
            treeRepository.save(tree);
        }

    }

    @Override
    public Tree waterTree(int id, int pay) {
        Tree tree = treeRepository.findById(id)
                .orElseThrow(TreeNotFoundException::new);

        Points userPoints = pointsRepository.findByUserId(tree.getUser().getId())
                .orElseThrow(PointsNotFoundException::new);

        if (pay > userPoints.getBalance()) {
            throw new InsufficientPointsException();
        }

        if (tree.getCount() + pay > 3000) {
            throw new TreeAlmostGrownException(3000 - tree.getCount());
        }

        // 포인트 차감
        userPoints.setBalance(userPoints.getBalance() - pay);
        pointsRepository.save(userPoints);

        // 나무 물주기
        tree.setCount(tree.getCount() + pay);
        return treeRepository.save(tree);
    }

    @Override
    public void getGift(int id) {
        Tree tree = treeRepository.findById(id).orElseThrow(TreeNotFoundException::new);
        tree.setCount(0);
        treeRepository.save(tree);
    }
}
