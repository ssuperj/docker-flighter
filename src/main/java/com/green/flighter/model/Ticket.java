package com.green.flighter.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.green.flighter.enums.SeatType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "ticket")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
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

    @Column(nullable = false)
    private Integer price;

    private Integer passengers;
    private Integer adult;
    private Integer youth;
    private Integer child;

    @OneToMany(fetch = FetchType.EAGER,mappedBy = "ticket")
    private List<Seat> seats;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    @JsonIgnoreProperties({"hibernateLazyInitializer"})
    private Users users;

    @CreationTimestamp
    private Timestamp reservationTime;
}
