package com.green.flighter.controller;

import com.green.flighter.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService testService;

    @PostMapping
    public String test(@PathVariable String name) {
        return "hello";
    }
}
