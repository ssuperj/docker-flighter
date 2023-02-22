package com.green.flighter.controller;

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
    public String ticketing(@RequestBody Ticket ticket, @RequestBody Seat seat) {
        Users user1 = userRepository.findById(1).get();


        ticket.setUsers(user1);
//        ticket.setSeats(seats);

        System.out.println(ticket);
        System.out.println(seat);
        ticketService.예매하기(ticket, seat);

        return "";
    }

    @GetMapping(value = "/mypage/{userId}")
    public Object findTicket(@PathVariable("userId") int id) {
        List<Ticket> tickets = ticketRepository.findByTicket(id);

            return new ResponseEntity<>(tickets, HttpStatus.OK);

    }
}