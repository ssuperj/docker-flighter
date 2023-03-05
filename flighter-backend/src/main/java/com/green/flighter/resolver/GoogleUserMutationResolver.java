package com.green.flighter.resolver;

import com.green.flighter.dto.LoginRequestDto;
import com.green.flighter.dto.TokenInfo;
import com.green.flighter.service.LoginService;
import com.green.flighter.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Slf4j
@Controller
@RequiredArgsConstructor
public class GoogleUserMutationResolver {

    private final UserService userService;
    private final LoginService loginService;

    @MutationMapping
    public TokenInfo saveOrLoginUserByGoogle(@Argument String sub, @Argument String email, @Argument String name, @Argument String picture) {
        if(userService.validateDupleEmail(email)) {
            TokenInfo tokenInfo = loginService.login(new LoginRequestDto(email, sub));
            return tokenInfo;
        }
        userService.saveUserByGoogleOrGithub(sub, email, name, picture);
        TokenInfo tokenInfo = loginService.login(new LoginRequestDto(email, sub));
        return tokenInfo;
    }
}
