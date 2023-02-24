package com.green.flighter.repository;

import com.green.flighter.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FlightRepository extends JpaRepository<Flight, Long> {
    Flight findByFlight(String flight);
}
