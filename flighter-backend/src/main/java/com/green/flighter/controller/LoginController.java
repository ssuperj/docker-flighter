package com.green.flighter.controller;

import com.green.flighter.dto.LoginRequestDto;
import com.green.flighter.dto.TokenInfo;
import com.green.flighter.service.LoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/login")
public class LoginController {

    private final LoginService loginService;

    @PostMapping
    public ResponseEntity<TokenInfo> loginSubmit(@RequestBody LoginRequestDto loginRequestDto) {
        TokenInfo tokenInfo = loginService.login(loginRequestDto);
        return new ResponseEntity<>(tokenInfo, HttpStatus.OK);
    }
}
