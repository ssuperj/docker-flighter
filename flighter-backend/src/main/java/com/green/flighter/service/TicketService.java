package com.green.flighter.service;

import com.green.flighter.dto.TicketDto;
import com.green.flighter.model.Ticket;
import com.green.flighter.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;

    @Transactional
    public void saveTicket(Ticket ticket){
        ticketRepository.save(ticket);
    }

    @Transactional
    public List<TicketDto> findTicketsByUserId(Long userId) {
        List<Ticket> tickets = ticketRepository.findByUserId(userId);
        List<TicketDto> ticketDtos = new ArrayList<>();

        for (Ticket ticket : tickets) {
            TicketDto ticketDto = TicketDto.fromTicket(ticket, true, false, true);
            ticketDtos.add(ticketDto);
        }

        return ticketDtos;
    }
}
