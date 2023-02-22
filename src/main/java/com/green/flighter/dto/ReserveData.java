package com.green.flighter.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ReserveData {
    private TicketDataDto ticketDataDto;
    private SeatDataDto seatDataDto;
    private FlightDataDto flightDataDto;
}
