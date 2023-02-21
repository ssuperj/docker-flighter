package com.green.flighter.model;
import com.green.flighter.enums.SeatType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "ticket")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@SequenceGenerator(name = "SEQ_GENERATOR2", sequenceName = "SEQ2", allocationSize = 1)
public class Ticket {

    @Id
    @GeneratedValue(generator = "SEQ_GENERATOR2", strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false)
    private String airLine;

    @Column(nullable = false)
    private String flight;

    @Column(nullable = false)
    private String departure;

    @Column(nullable = false)
    private String destination;

    @Column(nullable = false)
    private LocalDate departureDate;

    @Column(nullable = false)
    private String startTime;

    @Column(nullable = false)
    private String endTime;

    @Column(nullable = false)
    private Integer price;

    @OneToMany(fetch = FetchType.EAGER,mappedBy = "ticket")
    private List<Seat> seats;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    private Users users;

    @CreationTimestamp
    private Timestamp reservationTime;
}
