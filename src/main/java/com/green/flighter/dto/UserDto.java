package com.green.flighter.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.green.flighter.enums.RoleType;
import com.green.flighter.enums.SexType;
import com.green.flighter.model.Ticket;
import com.green.flighter.model.Users;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class UserDto {
    private Long id;
    private String email;
    private String name;
    private LocalDate birth;
    private String image;
    private LocalDateTime createDate;
    private LocalDateTime validDate;
    private SexType sexType;
    private RoleType roleType;
    private int totalTicket;
    @JsonIgnoreProperties({"seats","user", "flight"})
    private List<Ticket> tickets;

    public static UserDto fromUser(Users user, boolean includeTickets) {
        UserDtoBuilder builder = UserDto.builder()
                .id(user.getId())
                .email(user.getEmail())
                .name(user.getName())
                .birth(user.getBirth())
                .image(user.getImage())
                .createDate(user.getCreateDate())
                .validDate(user.getValidDate())
                .sexType(user.getSexType())
                .roleType(user.getRoleType())
                .totalTicket(user.getTotalTicket());

        if(includeTickets) {
            builder.tickets(user.getTickets());
        }

        return builder.build();
    }
}
