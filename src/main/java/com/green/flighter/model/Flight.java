package com.green.flighter.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "flight",  uniqueConstraints = {@UniqueConstraint(columnNames = {"flight"})} )
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(name = "SEQ_GENERATOR4", sequenceName = "SEQ4", allocationSize = 1)
public class Flight {

    @Id
    @GeneratedValue(generator = "SEQ_GENERATOR4", strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String flight;

    @Column(nullable = false)
    private String departure;

    @Column(nullable = false)
    private String depCode;

    @Column(nullable = false)
    private String destination;

    @Column(nullable = false)
    private String desCode;

    @Column(nullable = false)
    private String departureDate;

    @Column(nullable = false)
    private String startTime;

    @Column(nullable = false)
    private String endTime;

    @OneToMany(fetch = FetchType.EAGER,mappedBy = "flight")
    private List<Ticket> tickets;

    @OneToMany(fetch = FetchType.EAGER,mappedBy = "flight")
    private List<Seat> seats;
}
