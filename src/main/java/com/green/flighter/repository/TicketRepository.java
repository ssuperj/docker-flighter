package com.green.flighter.repository;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.green.flighter.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

//    @Query(value = "select * from Ticket where user_id = ?1", nativeQuery = true)
//    List<Ticket> findByTicket(int id);

//    @JsonIgnoreProperties({"hibernateLazyInitializer"})
    List<Ticket>findByUserId (Long userId);

}
