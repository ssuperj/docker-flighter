package com.green.flighter.service;

import com.green.flighter.dto.FlightDto;
import com.green.flighter.model.Flight;
import com.green.flighter.repository.FlightRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class FlightService {

    private final FlightRepository flightRepository;

    @Transactional
    public void saveFlight(Flight flight) {
        flightRepository.save(flight);
    }

    @Transactional(readOnly = true)
    public boolean isExistFlight(FlightDto flightDto) {
        return flightRepository.existsByFlight(flightDto.getFlight());
    }
}
