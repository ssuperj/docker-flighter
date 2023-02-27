package com.green.flighter.service;

import com.green.flighter.dto.FlightDto;
import com.green.flighter.dto.SeatDto;
import com.green.flighter.model.Seat;
import com.green.flighter.repository.SeatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SeatService {

    private final SeatRepository seatRepository;

    @Transactional
    public void saveSeat(Seat seat) {
        seatRepository.save(seat);
    }

    @Transactional(readOnly = true)
    public boolean isExistSeats(List<SeatDto> seatDtos) {
        return seatDtos.stream().anyMatch(seatDto -> seatRepository.existsBySeatNo(seatDto.getSeatNo()));
    }

    @Transactional(readOnly = true)
    public List<String> findSeatNosByFlight(String flight) {
        List<Seat> seats = seatRepository.findByFlight_Flight(flight);
        return seats.stream()
                .map(Seat::getSeatNo)
                .collect(Collectors.toList());
    }
}
