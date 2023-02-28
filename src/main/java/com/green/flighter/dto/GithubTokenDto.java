package com.green.flighter.dto;

import lombok.Data;

@Data
public class GithubTokenDto {
    private String access_token;
    private String token_type;
    private String scope;
}