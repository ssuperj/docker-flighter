package com.green.flighter.controller;

import com.green.flighter.config.jwt.JwtTokenUtils;
import com.green.flighter.dto.PasswordDto;
import com.green.flighter.dto.UserDto;
import com.green.flighter.model.Users;
import com.green.flighter.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;
    private final JwtTokenUtils jwtTokenUtils;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping
    public ResponseEntity<UserDto> findUser(HttpServletRequest request) {
        String token = jwtTokenUtils.resolveToken(request);
        Users user = userService.findUserByToken(token);
        UserDto userDto = UserDto.fromUser(user, false);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<String> withdraw(HttpServletRequest request) {
        String token = jwtTokenUtils.resolveToken(request);
        Users user = userService.findUserByToken(token);
        userService.dropUser(user);
        return new ResponseEntity<>("Drop user success", HttpStatus.OK);
    }

    @PatchMapping("/password")
    public ResponseEntity<String> changePassword(HttpServletRequest request, @RequestBody PasswordDto passwordDto) {
        String token = jwtTokenUtils.resolveToken(request);
        Long userId = jwtTokenUtils.getUserId(token);
        Users user = userService.findUserByUserId(userId);
        boolean isMatched = bCryptPasswordEncoder.matches(passwordDto.getPassword(), user.getPassword());
        if (isMatched) {
            userService.modifyPassword(user, passwordDto);
            return new ResponseEntity<>("Modify password", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Not same password", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/image")
    public ResponseEntity<String> changeProfileImage(HttpServletRequest request, @RequestParam("file") MultipartFile file, @Value("${path.image}") String baseUrl) {
        String token = jwtTokenUtils.resolveToken(request);
        Users user = userService.findUserByToken(token);

        String imagePath =  user.getImage();
        if (imagePath != null) {
            Path originPath = Paths.get(baseUrl, imagePath);
            try {
                Files.delete(originPath);
            } catch (NoSuchFileException e) {
                log.warn("No such file: {}", imagePath);
            } catch (IOException e) {
                log.error("Failed to delete image: {}", imagePath, e);
                return new ResponseEntity<>("Failed to delete image", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        try {
            Path tempPath = Files.createTempFile("temp-", "-" + file.getOriginalFilename());
            file.transferTo(tempPath);

            String format = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyMMddHHmmss"));
            String imageName = format + file.getOriginalFilename();

            Path targetPath = Paths.get(baseUrl,  imageName);
            Files.createDirectories(targetPath.getParent());
            Files.move(tempPath, targetPath, StandardCopyOption.REPLACE_EXISTING);

            userService.saveProfileImage(user,imageName);

            return new ResponseEntity<>("Modify image", HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Failed to delete image", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
