package com.green.flighter.model;

import com.green.flighter.enums.SeatType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "seat")
@Data
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(name = "SEQ_GENERATOR3", sequenceName = "SEQ3", allocationSize = 1)
public class Seat {

    @Id
    @GeneratedValue(generator = "SEQ_GENERATOR3", strategy = GenerationType.AUTO)
    private int id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SeatType seatType;

    @Column(nullable = false)
    private String SeatNo;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ticketId")
    private Ticket ticket;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "flightId")
    private Flight flight;
}
