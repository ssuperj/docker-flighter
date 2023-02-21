package com.green.flighter.repository;

import com.green.flighter.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.graphql.data.GraphQlRepository;

@GraphQlRepository
public interface MemberRepository extends JpaRepository<Member, Long> {
}