package com.green.flighter.service;

import com.green.flighter.model.Users;
import com.green.flighter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
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
