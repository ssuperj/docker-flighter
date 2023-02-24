package com.green.flighter.service;

import com.green.flighter.config.jwt.JwtTokenProvider;
import com.green.flighter.config.jwt.JwtTokenUtils;
import com.green.flighter.dto.LoginRequestDto;
import com.green.flighter.model.Users;
import com.green.flighter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final JwtTokenUtils JwtTokenUtils;

    @Transactional
    public Users findUserByEmail(LoginRequestDto loginRequestDto) {
        Users user =  userRepository.findByEmail(loginRequestDto.getEmail())
                .orElseThrow(()->
                        new NoSuchElementException("해당 이메일을 가진 사용자를 찾을 수 없습니다.")
                );
        return user;
    }

    @Transactional
    public String findUserByToken(String token) {
        String username = JwtTokenUtils.getUsername(token);
        log.warn(username);
        // User 객체를 UserDto로 변환하여 반환
        return username;
    }
}
