package com.green.flighter.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@Slf4j
public class HelloController {

    @ResponseBody
    @GetMapping("/hello/{message}")
    public String hello(@PathVariable String message) {
        log.error(message);
        return "hhhhhhh" + message;
    }
}
