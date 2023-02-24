package com.green.flighter.repository;

import com.green.flighter.model.Flight;
import com.green.flighter.model.Seat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Long> {

    boolean existsBySeatNo(String seatNo);

    List<Seat> findByFlight_Flight(String flight);
}
