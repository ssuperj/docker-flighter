package com.green.flighter.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.green.flighter.dto.GithubEmailDto;
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
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Slf4j
@Controller
@RequestMapping("/api/auth/github")
public class GithubController {

    private static final String CLIENT_ID = System.getenv("CLIENT_ID");
    private static final String CLIENT_PWD = System.getenv("CLIENT_PWD");
    private static final String REDIRECT_URI = System.getenv("REDIRECT_URI");
    private static final String FRONTEND = System.getenv("FRONTEND");

    private final UserService userService;
    private final LoginService loginService;

    @GetMapping
    public String saveOrLoginUserByGithub(@RequestParam String code) {
        log.warn("CLIENT_ID" + CLIENT_ID);
        log.warn("CLIENT_PWD" + CLIENT_PWD);
        log.warn("REDIRECT_URI" + REDIRECT_URI);
        String accessToken = getAccessToken(code);
        GithubUserDto githubUserDto = getGithubUserDto(accessToken);

        log.warn("234");
        if(userService.validateDupleEmail(githubUserDto.getEmail())) {
             String tokenQueryString = loginService.login(new LoginRequestDto(githubUserDto.getEmail(), githubUserDto.getId())).getToken();
            String URL = String.format("http://%s:3000/fligher%s", FRONTEND, tokenQueryString);
            log.warn("URL" + URL);
            return URL;
        }
        log.warn("123");
        log.warn("id" +  githubUserDto.getId() + "email" + githubUserDto.getEmail() +  "login" + githubUserDto.getLogin() + "url" + githubUserDto.getAvatarUrl());
        userService.saveUserByGoogleOrGithub(githubUserDto.getId(), githubUserDto.getEmail(), githubUserDto.getLogin(), githubUserDto.getAvatarUrl());
        String tokenQueryString = loginService.login(new LoginRequestDto(githubUserDto.getEmail(), githubUserDto.getId())).getToken();
        String URL = String.format("http://%s:3000/fligher%s", FRONTEND, tokenQueryString);
        log.warn("URL" + URL);
        return URL;
    }

    private static GithubUserDto getGithubUserDto(String accessToken) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer  " + accessToken);
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
            if(githubUserDto.getEmail().equals("")) {
                String email = GithubController.getEmail(accessToken);
                githubUserDto.setEmail(email);
            }
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return githubUserDto;
    }


    private static String getEmail(String accessToken) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer  " + accessToken);

        Map<String, String> body = new HashMap<>();

        HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(body, headers);

        URI url = UriComponentsBuilder.fromUriString("https://api.github.com/user/emails")
                .build()
                .toUri();

        log.warn("url");

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, requestEntity, String.class);
        String responseBody = response.getBody();

        ObjectMapper objectMapper = new ObjectMapper();
        JavaType listType = TypeFactory.defaultInstance().constructCollectionType(List.class, GithubEmailDto.class);
        GithubEmailDto githubEmailDto = null;

        try {
            List<GithubEmailDto> githubEmailDtoList = objectMapper.readValue(response.getBody(), listType);
            githubEmailDto = githubEmailDtoList.get(0);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        log.warn(githubEmailDto.toString());
        log.warn("responseBody" + responseBody);

        return githubEmailDto.getEmail();
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

        log.warn(response.getBody());

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
