package com.green.flighter.config;

import com.green.flighter.enums.SexType;
import com.green.flighter.model.Users;
import com.green.flighter.repository.UserRepository;
import com.green.flighter.service.JoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Date;

@RequiredArgsConstructor
@Component
public class SampleApplicationRunner implements ApplicationRunner {

    private final JoinService joinService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // 더미 데이터 생성
        Users user = new Users(1L, "poqwer95@gmail.com", "!rhkdrms95", "고광근", LocalDate.of(1995, 7, 4), null, null, null, SexType.MALE, null);

        // 데이터베이스에 저장
        joinService.joinUser(user);
    }

}
