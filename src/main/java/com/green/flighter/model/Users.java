package com.green.flighter.model;

import com.green.flighter.enums.SexType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import java.sql.Timestamp;
import java.time.LocalDate;

@Entity
@Table(name = "users")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@SequenceGenerator(name = "SEQ_GENERATOR", sequenceName = "SEQ", allocationSize = 1)
public class Users {

    @Id
    @GeneratedValue(generator = "SEQ_GENERATOR", strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false, length = 30, unique = true)
    private String email;

    @Column(nullable = false, length = 30)
    private String password;

    @Column(nullable = false, length = 30)
    private String name;

    private LocalDate birth;

    @Enumerated(EnumType.STRING)
    private SexType sexType;

    private String image;

    @CreationTimestamp
    private Timestamp createDate;

    @CreationTimestamp
    private Timestamp validDate;
}
