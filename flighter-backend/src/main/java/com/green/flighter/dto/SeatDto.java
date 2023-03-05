package com.green.flighter.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.green.flighter.enums.SeatType;
import com.green.flighter.model.Flight;
import com.green.flighter.model.Seat;
import com.green.flighter.model.Ticket;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SeatDto {

    private SeatType seatType;
    private String seatNo;
    @JsonIgnoreProperties({"user", "flight"})
    private Ticket ticket;
    @JsonIgnoreProperties({"tickets", "seats"})
    private Flight flight;

    public static SeatDto fromSeat(Seat seat, boolean includeTicket, boolean includeFlight) {
        SeatDtoBuilder builder = SeatDto.builder()
                .seatType(seat.getSeatType())
                .seatNo(seat.getSeatNo());

        if(includeTicket) {
            builder.ticket(seat.getTicket());
        }

        if(includeFlight) {
            builder.flight(seat.getFlight());
        }

        return builder.build();
    }

    public static Seat toSeat(SeatDto seatDto) {
        return Seat.builder()
                .seatType(seatDto.getSeatType())
                .seatNo(seatDto.getSeatNo())
                .build();
    }

    public static List<Seat> toSeat(List<SeatDto> seatDtos) {
        return seatDtos.stream()
                .map(SeatDto::toSeat)
                .collect(Collectors.toList());
    }
}
