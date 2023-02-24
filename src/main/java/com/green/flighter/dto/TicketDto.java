package com.green.flighter.dto;

import com.green.flighter.model.Flight;
import com.green.flighter.model.Seat;
import com.green.flighter.model.Users;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

@Data
@Builder
public class TicketDataDto {

    private String airLine;
    private Integer price;
    private Integer adult;
    private Integer youth;
    private Integer child;
    private List<Seat> seats;
    private Users user;
    private Flight flight;
    private Timestamp reservationTime;
}
