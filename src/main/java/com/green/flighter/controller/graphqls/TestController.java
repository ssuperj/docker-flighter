package com.green.flighter.controller.graphqls;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
public class TestController {

    private String testAString = "testAString";

    @QueryMapping
    public String testA() {
        return testAString;
    }

    @MutationMapping
    public String testAUpdate(@Argument String changeValue) {
        testAString = changeValue;
        return testAString;
    }
}