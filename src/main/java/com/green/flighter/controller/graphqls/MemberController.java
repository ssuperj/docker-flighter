package com.green.flighter.controller.graphqls;

import com.green.flighter.model.Member;
import com.green.flighter.model.Token;
import com.green.flighter.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Slf4j
@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberRepository memberRepository;

    @QueryMapping
    public Member getMember(@Argument Long id){
        return memberRepository.findById(id).get();
    }

    @QueryMapping
    public List<Member> getMembers(){
        return memberRepository.findAll();
    }

    @MutationMapping
    public Member save(@Argument Long id, @Argument String name, @Argument int age){
        log.warn(name);
        Member member = Member.builder()
                .name(name)
                .age(age)
                .build();
        return memberRepository.save(member);
    }

    @QueryMapping
    public void token(@Argument Long id, @Argument String email, @Argument String name, @Argument String picture) {
        log.info(email + name + picture);
    }
}