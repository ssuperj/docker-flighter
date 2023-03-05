package com.green.flighter.service;

import com.green.flighter.dto.FlightDto;
import com.green.flighter.dto.ReserveData;
import com.green.flighter.dto.SeatDto;
import com.green.flighter.dto.TicketDto;
import com.green.flighter.model.Flight;
import com.green.flighter.model.Seat;
import com.green.flighter.model.Ticket;
import com.green.flighter.model.Users;
import com.green.flighter.repository.FlightRepository;
import com.green.flighter.repository.SeatRepository;
import com.green.flighter.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReserveService {

    private final TicketRepository ticketRepository;
    private final SeatRepository seatRepository;
    private final FlightRepository flightRepository;

    @Transactional
    public void reserve(Users user, ReserveData reserveData) {
        Flight flight = flightRepository.findByFlight(reserveData.getFlightDto().getFlight())
                .orElseGet(()->FlightDto.toFlight(reserveData.getFlightDto()));
        Ticket ticket = TicketDto.toTicket(reserveData.getTicketDto());
        List<Seat> seatList = SeatDto.toSeat(reserveData.getSeatDtos());

        for (Seat seat : seatList) {
            mapToBiDirection(user, flight, ticket, seat);
            seatRepository.save(seat);
        }

        flightRepository.save(flight);
        ticketRepository.save(ticket);
    }

    private void mapToBiDirection(Users user, Flight flight, Ticket ticket, Seat seat) {
        user.getTickets().add(ticket);
        ticket.setUser(user);
        ticket.getSeats().add(seat);
        ticket.setFlight(flight);
        seat.setTicket(ticket);
        seat.setFlight(flight);
        flight.getTickets().add(ticket);
        flight.getSeats().add(seat);
    }
}
