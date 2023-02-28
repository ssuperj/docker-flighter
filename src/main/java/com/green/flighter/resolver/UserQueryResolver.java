package com.green.flighter.resolver;

import com.green.flighter.model.Users;
import com.green.flighter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.NoSuchElementException;

@Slf4j
@Controller
@RequiredArgsConstructor
public class UserQueryResolver {

    private final UserRepository userRepository;

    @QueryMapping
    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    @QueryMapping
    public Users getUserById(@Argument Long id) {
        Users user = userRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException(String.format("해당 id:%d 사용자가 없습니다.", id)));
        return user;
    }
}
