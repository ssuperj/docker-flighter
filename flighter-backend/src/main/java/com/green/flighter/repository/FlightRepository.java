package com.green.flighter.repository;

import com.green.flighter.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FlightRepository extends JpaRepository<Flight, Long> {
    Optional<Flight> findByFlight(String flight);
    boolean existsByFlight(String flight);
}
