package com.green.flighter.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "ticket")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
@SequenceGenerator(name = "SEQ_GENERATOR2", sequenceName = "SEQ2", allocationSize = 1)
public class Ticket {

    @Id
    @GeneratedValue(generator = "SEQ_GENERATOR2", strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String airLine;

    @Column(nullable = false)
    private Integer price;

    private Integer adult;
    private Integer youth;
    private Integer child;

    @OnDelete(action = OnDeleteAction.CASCADE)
    @OneToMany(mappedBy = "ticket", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Seat> seats;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    private Users user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "flightId")
    private Flight flight;

    @CreationTimestamp
    private Timestamp reservationTime;
}
