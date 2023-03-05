package com.green.flighter.dto;

import lombok.Data;

import java.util.List;

@Data
public class ReserveData {
    private FlightDto flightDto;
    private TicketDto ticketDto;
    private List<SeatDto> seatDtos;
}
