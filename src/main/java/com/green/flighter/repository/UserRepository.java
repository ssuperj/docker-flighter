package com.green.flighter.repository;

import com.green.flighter.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<Users, Integer> {
    boolean existsByEmail(String email);
}
