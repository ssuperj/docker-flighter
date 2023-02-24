package com.green.flighter.controller;

import com.green.flighter.config.jwt.JwtTokenUtils;
import com.green.flighter.model.Users;
import com.green.flighter.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class HelloController {

    private final UserService userService;
    private final  JwtTokenUtils jwtTokenUtils;

    @PostMapping
    public ResponseEntity<Users> getUser(HttpServletRequest request) {
        String token = jwtTokenUtils.resolveToken(request);
        Users user = userService.findUserByToken(token);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
