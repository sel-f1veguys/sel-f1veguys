package com.f1veguys.sel.global.error;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    INTERNAL_SERVER_ERROR(500, "서버 오류가 발생했습니다."),
    FILE_NOT_FOUND(400, "파일을 찾을 수 없습니다."),
    UNSUPPORTED_FORMAT(415, "지원하지 않는 파일 포맷입니다."),
    USER_NOT_FOUND(400, "사용자를 찾을 수 없습니다."),
    CAMPAIGN_NOT_FOUND(400, "캠페인을 찾을 수 없습니다."),
    POINTS_NOT_FOUND(400, "포인트를 찾을 수 없습니다."),
    INSUFFICIENT_POINTS(400, "보유하고 있는 포인트가 부족합니다.");

    private final int httpStatus;
    private final String message;
}
