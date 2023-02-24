package com.green.flighter.repository;

import com.green.flighter.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightRepository extends JpaRepository<Flight, Long> {
    Flight findByFlight(String flight);
    boolean existsByFlight(String flight);
}
