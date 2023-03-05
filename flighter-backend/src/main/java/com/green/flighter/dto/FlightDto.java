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

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FlightDto {
    private String flight;
    private String departure;
    private String depCode;
    private String destination;
    private String desCode;
    private String departureDate;
    private String startTime;
    private String endTime;
    @JsonIgnoreProperties({"user","flight"})
    private List<Ticket> tickets;
    @JsonIgnoreProperties({"ticket", "flight"})
    private List<Seat> seats;

    public static FlightDto fromFlight(Flight flight, boolean includeTickets, boolean includeSeats) {
        FlightDtoBuilder builder = FlightDto.builder()
                .flight(flight.getFlight())
                .departure(flight.getDeparture())
                .depCode(flight.getDepCode())
                .destination(flight.getDestination())
                .desCode(flight.getDesCode())
                .departureDate(flight.getDepartureDate())
                .startTime(flight.getStartTime())
                .endTime(flight.getEndTime());

        if (includeTickets) {
            builder.tickets(flight.getTickets());
        }

        if(includeSeats) {
            builder.seats(flight.getSeats());
        }

        return builder.build();
    }

    public static Flight toFlight(FlightDto flightDto) {
        return Flight.builder()
                .flight(flightDto.getFlight())
                .departure(flightDto.getDeparture())
                .depCode(flightDto.getDepCode())
                .destination(flightDto.getDestination())
                .desCode(flightDto.getDesCode())
                .departureDate(flightDto.getDepartureDate())
                .startTime(flightDto.getStartTime())
                .endTime(flightDto.getEndTime())
                .tickets(new ArrayList<>())
                .seats(new ArrayList<>())
                .build();
    }
}
