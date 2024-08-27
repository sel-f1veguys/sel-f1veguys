package com.f1veguys.sel.global.error.exception;

import com.f1veguys.sel.global.error.ErrorCode;
import com.f1veguys.sel.global.error.ServiceException;

public class InsufficientPoints extends ServiceException {
    public InsufficientPoints() {
        super(ErrorCode.INSUFFICIENT_POINTS);
    }
}
