package com.green.flighter.model;

import com.green.flighter.enums.SexType;
import jakarta.persistence.*;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.CreationTimestamp;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Slf4j
@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SequenceGenerator(name = "SEQ_GENERATOR", sequenceName = "SEQ", allocationSize = 1)
@ToString
public class Users {

    @Id
    @GeneratedValue(generator = "SEQ_GENERATOR", strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false, length = 30)
    private String name;

    @Column(nullable = false, length = 30, unique = true)
    private String email;

    @Column(nullable = false, length = 30)
    private String password;

    private LocalDate birth;

    @Enumerated(EnumType.STRING)
    private SexType sexType;

    private String image;

    @CreationTimestamp
    private LocalDateTime createDate;

    private LocalDateTime validDate;
}
