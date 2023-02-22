package com.green.flighter.service;

import com.green.flighter.config.jwt.JwtTokenProvider;
import com.green.flighter.dto.TokenInfo;
import com.green.flighter.model.Users;
import com.green.flighter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;




    @Transactional
    public void 회원가입(Users user) {
        userRepository.save(user);
    }
}
