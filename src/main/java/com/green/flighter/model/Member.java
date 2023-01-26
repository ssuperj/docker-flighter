package com.green.flighter.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Member {

    @Id
    @Column
    private String id;

    @Column
    private String password;
}