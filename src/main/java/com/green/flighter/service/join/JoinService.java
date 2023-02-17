package com.green.flighter.service.join;

import com.green.flighter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class JoinService {

    private final UserRepository userRepository;

    @Transactional
    public boolean validate(String email) {
        return userRepository.existsByEmail(email);
    }
}
