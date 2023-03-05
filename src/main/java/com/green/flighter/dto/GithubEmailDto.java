package com.green.flighter.dto;

import lombok.Data;

@Data
public class GithubEmailDto {
    private String email;
    private boolean primary;
    private boolean verified;
    private String visibility;
}
