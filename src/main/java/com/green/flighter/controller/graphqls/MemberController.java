package com.green.flighter.controller.graphqls;

import com.green.flighter.model.Member;
import com.green.flighter.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

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
        Member member = Member.builder()
                .name(name)
                .age(age)
                .build();
        return memberRepository.save(member);
    }

}