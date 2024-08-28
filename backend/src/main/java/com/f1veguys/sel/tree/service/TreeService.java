package com.f1veguys.sel.tree.service;

import com.f1veguys.sel.tree.domain.Tree;
import com.f1veguys.sel.user.domain.User;

public interface TreeService {

    Tree getTree(int userId);

    Tree startTree(User user);

    void endTree(int id);

    Tree waterTree(int id);

    Tree getGift(int id);
}
