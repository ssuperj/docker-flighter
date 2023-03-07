package com.green.flighter.config;

import com.green.flighter.enums.RoleType;
import com.green.flighter.enums.SeatType;
import com.green.flighter.enums.SexType;
import com.green.flighter.model.Flight;
import com.green.flighter.model.Seat;
import com.green.flighter.model.Ticket;
import com.green.flighter.model.Users;
import com.green.flighter.service.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;

@Slf4j
@RequiredArgsConstructor
@Component
public class SampleApplicationRunner implements ApplicationRunner {

        private final JoinService joinService;
        private final UserService userService;
        private final FlightService flightService;
        private final TicketService ticketService;
        private final SeatService seatService;


        @Override
        public void run(ApplicationArguments args) throws Exception {

                Users user = Users.builder()
                        .id(1L)
                        .email("poqwer95@naver.com")
                        .password("todnqjrj1!")
                        .name("고광근")
                        .birth(LocalDate.of(1995, 7, 4))
                        .sexType(SexType.MALE)
                        .roleType(RoleType.USER)
                        .tickets(new ArrayList<>())
                        .build();

                Flight flight = Flight.builder()
                        .id(1L)
                        .flight("OZ8900")
                        .departure("제주")
                        .depCode("CJU")
                        .destination("서울/김포")
                        .desCode("GMP")
                        .departureDate("2023/02/24")
                        .startTime("0635")
                        .endTime("0745")
                        .tickets(new ArrayList<>())
                        .seats(new ArrayList<>())
                        .build();

                Ticket ticket = Ticket.builder()
                        .airLine("ASIANA AIRLINE")
                        .price(130000)
                        .adult(1)
                        .youth(2)
                        .child(5)
                        .user(user)
                        .flight(flight)
                        .reservationTime(null)
                        .seats(new ArrayList<>())
                        .build();

                Seat seat = Seat.builder()
                        .seatType(SeatType.BUSINESS)
                        .seatNo("A12")
                        .build();


                user.getTickets().add(ticket);
                ticket.setUser(user);
                ticket.getSeats().add(seat);
                seat.setTicket(ticket);
                seat.setFlight(flight);
                flight.getTickets().add(ticket);
                flight.getSeats().add(seat);


                if(!userService.validateDupleEmail(user.getEmail())){
                        joinService.joinUser(user);
                }
//                flightService.saveFlight(flight);
//                ticketService.saveTicket(tickets);
//                seatService.saveSeat(seat);
        }

}
