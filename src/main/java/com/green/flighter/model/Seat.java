package com.green.flighter.model;

import com.green.flighter.enums.PassengerType;
import com.green.flighter.enums.SeatType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "seat")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(name = "SEQ_GENERATOR3", sequenceName = "SEQ3", allocationSize = 1)
public class Seat {

    @Id
    @GeneratedValue(generator = "SEQ_GENERATOR3", strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "passenger", nullable = false)
    private PassengerType passengerType;

    @Column(name = "seat", nullable = false)
    private SeatType seatType;

    @Column(nullable = false)
    private String SeatNo;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ticketId")
    private Ticket ticket;
}
