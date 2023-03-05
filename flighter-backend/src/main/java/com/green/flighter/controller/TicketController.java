package com.green.flighter.controller;

import com.green.flighter.config.jwt.JwtTokenUtils;
import com.green.flighter.dto.TicketDto;
import com.green.flighter.model.Users;
import com.green.flighter.repository.UserRepository;
import com.green.flighter.service.TicketService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/ticket")
public class TicketController {

    private final TicketService ticketService;
    private final JwtTokenUtils jwtTokenUtils;

     @GetMapping
     public ResponseEntity<List<TicketDto>> findTicket(HttpServletRequest request) {
         String token = jwtTokenUtils.resolveToken(request);
         Long userId = jwtTokenUtils.getUserId(token);
         List<TicketDto> ticketDtos = ticketService.findTicketsByUserId(userId);
         return new ResponseEntity<>(ticketDtos, HttpStatus.OK);
     }
}