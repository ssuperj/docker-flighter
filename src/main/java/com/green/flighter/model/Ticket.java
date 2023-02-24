package com.green.flighter.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
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

    @ManyToOne
    @JoinColumn(name = "flightId")
    private Flight flight;

    @Column(nullable = false)
    private Integer price;

    private Integer adult;
    private Integer youth;
    private Integer child;

    @OneToMany(fetch = FetchType.EAGER,mappedBy = "ticket")
    private List<Seat> seats;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    @JsonIgnoreProperties({"hibernateLazyInitializer"})
    private Users user;

    @CreationTimestamp
    private Timestamp reservationTime;
}
