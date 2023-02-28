package com.green.flighter.controller.auth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/auth/github")
public class GithubGraphqlController {

    @PostMapping
    public String callback() {
        log.warn("123");
        return "hello";
    }
}
