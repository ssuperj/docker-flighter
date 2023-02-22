package com.green.flighter.controller;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@Slf4j
@RestController
@RequestMapping("/hello")
public class HelloController {

    @GetMapping
    public String helloGet() {
        return "hello";
    }

    @PostMapping
    public String helloPost2(@RequestBody String text) {
        log.warn(text);
        return "haha";
    }
}
