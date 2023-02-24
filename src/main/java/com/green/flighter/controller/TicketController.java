package com.green.flighter.controller;

import com.green.flighter.dto.ReserveData;
import com.green.flighter.model.Ticket;
import com.green.flighter.model.Users;
import com.green.flighter.repository.TicketRepository;
import com.green.flighter.repository.UserRepository;
import com.green.flighter.service.TicketService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping
public class TicketController {

    private final TicketService ticketService;
    private final UserRepository userRepository;

    @PostMapping("/api/payment/complete")
    public String ticketing(@RequestBody ReserveData reserveData) {
        Users user1 = userRepository.findById(1L).get();

        ticketService.reserve(user1, reserveData.getTicketDataDto(), reserveData.getSeatDataDto(),
                reserveData.getFlightDataDto());

        return "";
    }

    @GetMapping(value = "/mypage/{userId}")
    public Object findTicket(@PathVariable("userId") int id) {
        List<Ticket> tickets = ticketRepository.findByTicket(id);

        return new ResponseEntity<>(tickets, HttpStatus.OK);

    }

    @GetMapping
    public String getTicket() {
        return "hello";
    }
    // @GetMapping(value = "/mypage/{userId}")
    // public Object findTicket(@PathVariable("userId") int userId) {
    // System.out.println("DSADDSADASDASDSAZzzzzzzzㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ");
    // List<Ticket> tickets = ticketService.ticketList(userId);
    //
    // System.out.println("티꼤쭈"+tickets);
    // return new ResponseEntity<>(tickets, HttpStatus.OK);
    // }
    // @GetMapping(value = "/mypage/{userId}")
    // public Object findTicket(@PathVariable("userId") int userId) {
    // List<Ticket> tickets = ticketService.findTicketsByUserId(userId);
    //
    // System.out.println(tickets);
    //
    // return new ResponseEntity<>(tickets, HttpStatus.OK);
    // }
}