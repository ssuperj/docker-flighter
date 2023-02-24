package com.green.flighter.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.green.flighter.enums.SeatType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "seat")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(name = "SEQ_GENERATOR3", sequenceName = "SEQ3", allocationSize = 1)
public class Seat {

    @Id
    @GeneratedValue(generator = "SEQ_GENERATOR3", strategy = GenerationType.AUTO)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SeatType seatType;

    @Column(nullable = false)
    private String seatNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ticketId")
    private Ticket ticket;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flightId")
    private Flight flight;
}
