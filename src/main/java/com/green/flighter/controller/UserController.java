package com.green.flighter.controller;

import com.green.flighter.config.jwt.JwtTokenUtils;
import com.green.flighter.dto.UserDto;
import com.green.flighter.model.Users;
import com.green.flighter.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    private final JwtTokenUtils jwtTokenUtils;

    @PostMapping
    public ResponseEntity<UserDto> getUser(HttpServletRequest request) {
        String token = jwtTokenUtils.resolveToken(request);
        Users user = userService.findUserByToken(token);
        UserDto userDto = UserDto.fromUser(user);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
}
