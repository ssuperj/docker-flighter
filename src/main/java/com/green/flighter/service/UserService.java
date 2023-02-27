package com.green.flighter.service;

import com.green.flighter.config.jwt.JwtTokenUtils;
import com.green.flighter.dto.LoginRequestDto;
import com.green.flighter.dto.PasswordDto;
import com.green.flighter.model.Users;
import com.green.flighter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final JwtTokenUtils JwtTokenUtils;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional(readOnly = true)
    public Users findUserByToken(String token) {
        Long userId = JwtTokenUtils.getUserId(token);
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new NoSuchElementException(String.format("해당 id:%d 사용자가 없습니다.", userId)));
        return user;
    }

    @Transactional(readOnly = true)
    public Users findUserByUserId(Long userId) {
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new NoSuchElementException(String.format("해당 id:%d 사용자가 없습니다.", userId)));
        return user;
    }

    @Transactional
    public void modifyPassword(Users user, PasswordDto passwordDto) {
        String encodedPassword = bCryptPasswordEncoder.encode(passwordDto.getPasswordNew());
        user.setPassword(encodedPassword);
        userRepository.save(user);
    }

    @Transactional
    public void saveProfileImage(Users user, String image) {
        user.setImage(image);
        userRepository.save(user);
    }

    @Transactional
    public void dropUser(Users user) {
        userRepository.delete(user);
    }
}
