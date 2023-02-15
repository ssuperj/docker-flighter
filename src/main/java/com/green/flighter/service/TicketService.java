package com.green.flighter.service;

import com.green.flighter.model.Ticket;
import com.green.flighter.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;

    @Transactional
    public void 예매하기(Ticket ticket) {
        ticketRepository.save(ticket);
    }
}
