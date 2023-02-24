package com.green.flighter.dto;

import com.green.flighter.enums.SeatType;
import com.green.flighter.model.Flight;
import com.green.flighter.model.Seat;
import com.green.flighter.model.Ticket;
import com.green.flighter.model.Users;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReserveData {
    private TicketDataDto ticketDataDto;
    private SeatDataDto seatDataDto;
    private FlightDataDto flightDataDto;
}
