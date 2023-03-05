package com.green.flighter.config;


import com.green.flighter.config.jwt.JwtAuthenticationFilter;
import com.green.flighter.config.jwt.JwtTokenProvider;
import com.green.flighter.config.jwt.JwtTokenUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtTokenProvider JwtTokenProvider;
    private final JwtTokenUtils jwtTokenUtils;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeHttpRequests((authz) -> authz
                        .requestMatchers("/api/login/**", "/api/join/**", "/api/auth/**","/api/graphql/**", "/graphiql").permitAll()
                        .anyRequest().authenticated()
                        .and()
                        .addFilterBefore(new JwtAuthenticationFilter(JwtTokenProvider, jwtTokenUtils), UsernamePasswordAuthenticationFilter.class));
//                        .requestMatchers("/**").permitAll());
        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}