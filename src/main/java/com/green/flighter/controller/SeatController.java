package com.green.flighter.controller;

import com.green.flighter.service.SeatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/seat")
public class SeatController {

    private final SeatService seatService;

    @GetMapping("/{flight}")
    public ResponseEntity<List<String>> findSeatNos(@PathVariable String flight){
        List<String> seatNos = seatService.findSeatNosByFlight(flight);
        return new ResponseEntity<>(seatNos, HttpStatus.OK);
    }
}
