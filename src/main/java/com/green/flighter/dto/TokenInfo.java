package com.green.flighter.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class TokenInfo {
    private String grantType;
    private String accessToken;
    private String refreshToken;

    public String getToken() {
        return "?grantType=" + grantType + "&accessToken=" + accessToken + "&refreshToken=" + refreshToken;
    }
}
