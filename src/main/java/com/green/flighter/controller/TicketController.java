package com.green.flighter.controller;

import com.green.flighter.dto.TicketDataDto;
import com.green.flighter.enums.PassengerType;
import com.green.flighter.enums.SeatType;
import com.green.flighter.model.Seat;
import com.green.flighter.model.Ticket;
import com.green.flighter.model.Users;
import com.green.flighter.repository.TicketRepository;
import com.green.flighter.repository.UserRepository;
import com.green.flighter.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class TicketController {

    private final TicketService ticketService;

    private final UserRepository userRepository;
    private final TicketRepository ticketRepository;

    @PostMapping("/api/payment/complete")
    public String ticketing(@RequestBody TicketDataDto ticketDataDto) {
        Users user1 = userRepository.findById(1L).get();
        ticketService.예매하기(user1, ticketDataDto);

        return "";
    }

    @GetMapping(value = "/mypage/{userId}")
    public Object findTicket(@PathVariable("userId") int id) {
        List<Ticket> tickets = ticketRepository.findByTicket(id);

            return new ResponseEntity<>(tickets, HttpStatus.OK);

    }
}