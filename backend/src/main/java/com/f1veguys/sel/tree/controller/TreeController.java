package com.f1veguys.sel.tree.controller;

import com.f1veguys.sel.tree.domain.Tree;
import com.f1veguys.sel.tree.service.TreeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tree")
@Tag(name = "TreeController", description = "나무 API")
public class TreeController {

    private final TreeService treeService;

    @GetMapping("/{userId}")
    @Operation(summary = "나무 정보 조회", description = "나무의 상세 정보를 조회합니다.")
    public Tree getTree(@PathVariable int userId) {
        return treeService.getTree(userId);
    }

//    // 트리 시작
//    @PostMapping("/start")
//    public Tree startTree(@RequestBody User user) {
//        return treeService.startTree(user);
//    }

    // 물주기
    @PutMapping("/{id}/water")
    @Operation(summary = "나무에 물주기", description = "나무에 물(포인트, 500)를 줍니다.")
    public Tree waterTree(@PathVariable int id) {
        return treeService.waterTree(id);
    }

//    // 트리 종료 (id로 찾아서 종료)
//    @PutMapping("/{id}/end")
//    public void endTree(@PathVariable int id) {
//        treeService.endTree(id);
//    }

    // 기프티콘 받기
    @PutMapping("/{id}/gifticon")
    @Operation(summary = "완성된 나무에서 기프티콘 받기", description = "완성된 나무에서 기프티콘 받기 버튼을 눌러 나무를 초기화합니다")
    public Tree getGift(@PathVariable int id) {
        return treeService.getGift(id);
    }
    
}
