package com.green.flighter.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.green.flighter.dto.GithubTokenDto;
import com.green.flighter.dto.GithubUserDto;
import com.green.flighter.dto.LoginRequestDto;
import com.green.flighter.service.LoginService;
import com.green.flighter.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@Slf4j
@Controller
@RequestMapping("/api/auth/github")
public class GithubController {

    private static final String CLIENT_ID = "3d06fe1176e4f9b067e7";
    private static final String CLIENT_PWD = "1b9f9013e4af367aff5f55525528c9f19cd58f2b";
    private static final String REDIRECT_URI = "http://localhost:8080/api/auth/github";

    private final UserService userService;
    private final LoginService loginService;

    @GetMapping
    public String saveOrLoginUserByGithub(@RequestParam String code) {
        String accessToken = getAccessToken(code);
        GithubUserDto githubUserDto = getGithubUserDto(accessToken);

        if(userService.validateDupleEmail(githubUserDto.getEmail())) {
             String tokenQueryString = loginService.login(new LoginRequestDto(githubUserDto.getEmail(), githubUserDto.getId())).getToken();
            return "redirect:http://localhost:3000/flighter" + tokenQueryString;
        }
        userService.saveUserByGoogleOrGithub(githubUserDto.getId(), githubUserDto.getEmail(), githubUserDto.getLogin(), githubUserDto.getAvatarUrl());
        String tokenQueryString = loginService.login(new LoginRequestDto(githubUserDto.getEmail(), githubUserDto.getId())).getToken();
        return "redirect:http://localhost:3000/flighter"+ tokenQueryString;
    }

    private static GithubUserDto getGithubUserDto(String accessToken) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);
        headers.setContentType(MediaType.APPLICATION_JSON);

        String query = "query {   viewer {\n" +
                "    id\n" +
                "    login\n" +
                "    email\n" +
                "    avatarUrl\n" +
                "  } }";
        Map<String, String> body = new HashMap<>();
        body.put("query", query);

        HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(body, headers);

        ResponseEntity<String> response = restTemplate.exchange("https://api.github.com/graphql"//
                , HttpMethod.POST, requestEntity, String.class);

        ObjectMapper objectMapper = new ObjectMapper();
        GithubUserDto githubUserDto = null;

        try {
            String jsonString = response.getBody();
            JsonNode root = objectMapper.readTree(jsonString);
            JsonNode viewer = root.path("data").path("viewer");
            githubUserDto = objectMapper.treeToValue(viewer, GithubUserDto.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return githubUserDto;
    }

    private static String getAccessToken(String code) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Accept", " application/json");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("client_id", CLIENT_ID);
        params.add("client_secret", CLIENT_PWD);
        params.add("code", code);
        params.add("redirect_uri", REDIRECT_URI);

        HttpEntity<MultiValueMap<String, String>> accessTokenRequest = new HttpEntity<>(params, headers);

        ResponseEntity<String> response = restTemplate.exchange("https://github.com/login/oauth/access_token"//
                , HttpMethod.POST, accessTokenRequest, String.class);

        ObjectMapper objectMapper = new ObjectMapper();
        GithubTokenDto githubTokenDto = null;
        try {
            githubTokenDto = objectMapper.readValue(response.getBody(), GithubTokenDto.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        String accessToken = githubTokenDto.getAccess_token();
        return accessToken;
    }

}
