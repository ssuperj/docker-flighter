package com.green.flighter.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.green.flighter.model.Flight;
import com.green.flighter.model.Seat;
import com.green.flighter.model.Ticket;
import com.green.flighter.model.Users;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TicketDto {

    private String airLine;
    private Integer price;
    private Integer adult;
    private Integer youth;
    private Integer child;
    @JsonIgnoreProperties({"ticket" , "flight"})
    private List<Seat> seats;
    @JsonIgnoreProperties({"tickets", "password"})
    private Users user;
    @JsonIgnoreProperties({"tickets", "seats"})
    private Flight flight;
    private Timestamp reservationTime;

    public static TicketDto fromTicket(Ticket ticket ,boolean includeSeats, boolean includeUser, boolean includeFlight) {
        TicketDtoBuilder builder = TicketDto.builder()
                .airLine(ticket.getAirLine())
                .price(ticket.getPrice())
                .adult(ticket.getAdult())
                .youth(ticket.getYouth())
                .child(ticket.getChild())
                .reservationTime(ticket.getReservationTime());

        if(includeSeats) {
            builder.seats(ticket.getSeats());
        }

        if(includeUser) {
            builder.user(ticket.getUser());
        }

        if(includeFlight) {
            builder.flight(ticket.getFlight());
        }

        return builder.build();
    }

    public static Ticket toTicket(TicketDto ticketDto) {
        return Ticket.builder()
                .airLine(ticketDto.getAirLine())
                .price(ticketDto.getPrice())
                .adult(ticketDto.getAdult())
                .youth(ticketDto.getYouth())
                .child(ticketDto.getChild())
                .seats(new ArrayList<>())
                .build();
    }
}
