package com.green.flighter.controller;

import com.green.flighter.model.Users;
import com.green.flighter.service.JoinService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;
import java.util.UUID;
//import java.util.Properties;

@Slf4j
@RestController
@RequestMapping("/api/join")
@RequiredArgsConstructor
public class JoinController {

    private final JoinService joinService;

    @PostMapping("/validate")
    public ResponseEntity<Object> validateEmail(@RequestBody String email) {
        if(!joinService.validate(email)) {
            return new ResponseEntity<>("not duple email", HttpStatus.OK);
        }else {
            return new ResponseEntity<>("sorry, duple email", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/confirm")
    public ResponseEntity<Object> confirmSend(@RequestBody String email) {
        final String RANDOM_STR = UUID.randomUUID().toString().toUpperCase().substring(0,7);

        final String SEND_EMAIL = "rhrhkdrms95@gmail.com";
        final String RECEIVE_EMAIL = email;

        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");
        properties.put("mail.transport.protocol", "smtp");
        properties.put("mail.smtp.ssl.protocols", "TLSv1.2");


        Session session = Session.getInstance(properties, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(SEND_EMAIL, "shltjvkzireathjt");
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(SEND_EMAIL));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(RECEIVE_EMAIL));
            message.setSubject("안녕하세요 Flighter 인증번호 입니다.");
            message.setText("Thank you for being with us.\n 인증번호: " + RANDOM_STR);

            Transport.send(message);

            System.out.println("Email sent successfully.");
        } catch (MessagingException e) {
            e.printStackTrace();
        }

        return new ResponseEntity<>(RANDOM_STR, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Object> joinUser(@RequestBody Users user) {
        joinService.joinUser(user);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }
}
