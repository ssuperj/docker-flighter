package com.green.flighter.service;

import com.green.flighter.enums.RoleType;
import com.green.flighter.model.Users;
import com.green.flighter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Slf4j
@Service
@RequiredArgsConstructor
public class JoinService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Transactional
    public boolean validate(String email) {
        return userRepository.existsByEmail(email);
    }

    @Transactional
    public void joinUser(Users user) {
        user.setBirth(user.getBirth().plusDays(1));
        user.setValidDate(LocalDateTime.now().plus(5, ChronoUnit.YEARS));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoleType(RoleType.USER);
        userRepository.save(user);
    }

}
