package com.green.flighter.service;

import com.green.flighter.model.Seat;
import com.green.flighter.model.Ticket;
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
    public void 예매하기(Ticket ticket, Seat seat) {
        seatRepository.save(seat);
        ticketRepository.save(ticket);
    }
}
