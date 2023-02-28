package com.green.flighter.controller.auth;

import graphql.ExecutionResult;
import graphql.GraphQL;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/graphql/google")
public class GoogleGraphqlController {

//    private  final GraphQL graphQL;

//    @PostMapping
//    public ResponseEntity<Map<String, Object>> callback(@RequestBody String query) {
//        ExecutionResult result = graphQL.execute(query);
//        return new ResponseEntity<>(result.toSpecification(), HttpStatus.OK);
//    }
}
