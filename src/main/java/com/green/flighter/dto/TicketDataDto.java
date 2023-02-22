package com.green.flighter.dto;

import lombok.Data;

@Data
public class TicketDataDto {
    private Integer price;
    private String airLine;
    private String flight;
    private String departure;
    private String depCode;
    private String destination;
    private String desCode;
    private String departureDate;
    private String startTime;
    private String endTime;
    private Integer passengers;
    private Integer adult;
    private Integer youth;
    private Integer child;
}
