package com.green.flighter.controller;

import com.green.flighter.config.jwt.JwtTokenUtils;
import com.green.flighter.dto.*;
import com.green.flighter.model.Users;
import com.green.flighter.service.FlightService;
import com.green.flighter.service.ReserveService;
import com.green.flighter.service.SeatService;
import com.green.flighter.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/reserve")
public class ReserveController {

    private final JwtTokenUtils jwtTokenUtils;
    private final ReserveService reserveService;
    private final UserService userService;
    private final FlightService flightService;
    private final SeatService seatService;

    @PostMapping
    public ResponseEntity<String> Reserve(HttpServletRequest request , @RequestBody ReserveData reserveData) {
        // reserveData 검증
        if (reserveData.getFlightDto() == null || reserveData.getTicketDto() == null /*|| reserveData.getSeatDto() == null*/) {
            return new ResponseEntity<>("Invalid request" ,HttpStatus.BAD_REQUEST);
        }
        // 좌석 중복 검증
        if (flightService.isExistFlight(reserveData.getFlightDto()) && seatService.isExistSeats(reserveData.getSeatDtos())) {
            return new ResponseEntity<>("Existed data" ,HttpStatus.BAD_REQUEST);
        }
        // JWT 토큰 확인
        String token = jwtTokenUtils.resolveToken(request);
        if (token == null) {
            return new ResponseEntity<>("Unauthorized", HttpStatus.UNAUTHORIZED);
        }
        Users user = userService.findUserByToken(token);
        if (user == null) {
            return new ResponseEntity<>("Unauthorized", HttpStatus.UNAUTHORIZED);
        }
        reserveService.reserve(user, reserveData);
        return new ResponseEntity<>("Reservation successful", HttpStatus.OK);
    }
}
