package com.green.flighter.service;

import com.green.flighter.dto.FlightDataDto;
import com.green.flighter.dto.SeatDataDto;
import com.green.flighter.dto.TicketDataDto;
import com.green.flighter.enums.SeatType;
import com.green.flighter.model.Flight;
import com.green.flighter.model.Seat;
import com.green.flighter.model.Ticket;
import com.green.flighter.model.Users;
import com.green.flighter.repository.FlightRepository;
import com.green.flighter.repository.SeatRepository;
import com.green.flighter.repository.TicketRepository;
import com.green.flighter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;
    private final SeatRepository seatRepository;
    private final FlightRepository flightRepository;

    @Transactional
    public void reserve(Users user, TicketDataDto ticketDataDto, SeatDataDto seatDataDto, FlightDataDto flightDataDto) {
        Flight flight = Flight.builder()
                .flight(flightDataDto.getFlight())
                .departure(flightDataDto.getDeparture())
                .depCode(flightDataDto.getDepCode())
                .destination(flightDataDto.getDestination())
                .desCode(flightDataDto.getDesCode())
                .departureDate(flightDataDto.getDepartureDate())
                .startTime(flightDataDto.getStartTime())
                .endTime(flightDataDto.getEndTime())
                .build();
        Ticket ticket = Ticket.builder()
                .airLine(ticketDataDto.getAirLine())
                .price(ticketDataDto.getPrice())
                .adult(ticketDataDto.getAdult())
                .youth(ticketDataDto.getYouth())
                .child(ticketDataDto.getChild())
                .users(user)
                .flight(flight)
                .build();
        Seat seat = Seat.builder()
                .seatNo(seatDataDto.getSeatNo())
                .seatType(SeatType.valueOf(seatDataDto.getSeatType()))
                .ticket(ticket)
                .flight(flight)
                .build();


        ticketRepository.save(ticket);
        seatRepository.save(seat);
        flightRepository.save(flight);
    }
}
