package com.green.flighter.service.join;

import com.green.flighter.model.Users;
import com.green.flighter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Slf4j
@Service
@RequiredArgsConstructor
public class JoinService {

    private final UserRepository userRepository;

    @Transactional
    public boolean validate(String email) {
        return userRepository.existsByEmail(email);
    }

    @Transactional
    public void joinUser(Users user) {
        user.setBirth(user.getBirth().plusDays(1));
        user.setValidDate(LocalDateTime.now().plus(5, ChronoUnit.YEARS));
        userRepository.save(user);
    }
}
