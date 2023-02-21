package com.green.flighter.controller;

import com.green.flighter.enums.PassengerType;
import com.green.flighter.enums.SeatType;
import com.green.flighter.model.Seat;
import com.green.flighter.model.Ticket;
import com.green.flighter.model.Users;
import com.green.flighter.repository.UserRepository;
import com.green.flighter.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class TicketController {

    private final TicketService ticketService;

    private final UserRepository userRepository;

    @GetMapping("/ticket/{name}")
    public String test(@PathVariable String name) {
        Users user1 = userRepository.findById(1L).get();

        List<Seat> seats = new ArrayList<>();


        Ticket ticket = Ticket.builder()
                        .airLine("korean air").flight("ABC123").
                departure("인천공항").destination("김포공항").departureDate(LocalDate.now())
                .startTime("0203")
                .endTime("0903")
                .users(user1)
                .seats(seats)
                .build();

        seats.add(new Seat(1, PassengerType.ADULT, SeatType.BUSINESS, "A12", ticket));

        ticket.setSeats(seats);
        ticketService.예매하기(ticket);
        return "ticket";
    }
}
