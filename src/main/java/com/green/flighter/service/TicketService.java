package com.green.flighter.service;

import com.green.flighter.dto.TicketDataDto;
import com.green.flighter.model.Seat;
import com.green.flighter.model.Ticket;
import com.green.flighter.model.Users;
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

    private final UserRepository userRepository;
    private final TicketRepository ticketRepository;

    private final SeatRepository seatRepository;

    @Transactional
    public void 예매하기(Users user, TicketDataDto ticketDataDto) {
        Ticket ticket = Ticket.builder()
                .airLine(ticketDataDto.getAirLine())
                .flight(ticketDataDto.getFlight())
                .departure(ticketDataDto.getDeparture())
                .depCode(ticketDataDto.getDepCode())
                .destination(ticketDataDto.getDestination())
                .desCode(ticketDataDto.getDesCode())
                .departureDate(ticketDataDto.getDepartureDate())
                .startTime(ticketDataDto.getStartTime())
                .endTime(ticketDataDto.getEndTime())
                .price(ticketDataDto.getPrice())
                .passengers(ticketDataDto.getPassengers())
                .adult(ticketDataDto.getAdult())
                .youth(ticketDataDto.getYouth())
                .child(ticketDataDto.getChild())
                .users(user)
                .build();
        ticketRepository.save(ticket);
    }
}
