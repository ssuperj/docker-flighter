package com.green.flighter.dto;

import lombok.Data;

@Data
public class FlightDataDto {
    private String flight;
    private String departure;
    private String depCode;
    private String destination;
    private String desCode;
    private String departureDate;
    private String startTime;
    private String endTime;
}
