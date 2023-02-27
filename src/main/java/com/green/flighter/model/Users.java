package com.green.flighter.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.green.flighter.enums.RoleType;
import com.green.flighter.enums.SexType;
import jakarta.persistence.*;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Formula;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Entity
@Table(name = "users")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@SequenceGenerator(name = "SEQ_GENERATOR", sequenceName = "SEQ", allocationSize = 1)
@ToString(exclude = {"tickets"})
public class Users {

    @Id
    @GeneratedValue(generator = "SEQ_GENERATOR", strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, length = 30, unique = true)
    private String email;

    @Column(nullable = false, length = 100)
    private String password;

    @Column(nullable = false, length = 30)
    private String name;

    private LocalDate birth;

    private String image;

    @CreationTimestamp
    private LocalDateTime createDate;

    private LocalDateTime validDate;

    @Enumerated(EnumType.STRING)
    private SexType sexType;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private RoleType roleType;

    @OnDelete(action = OnDeleteAction.CASCADE)
    @OneToMany(mappedBy = "user")
    private List<Ticket> tickets;

    @Formula("(SELECT COUNT(*) FROM ticket t WHERE t.user_id = id)")
    private int totalTicket;
}
