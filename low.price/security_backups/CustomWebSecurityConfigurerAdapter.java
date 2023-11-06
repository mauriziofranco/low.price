package com.price.low.configuration;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class CustomWebSecurityConfigurerAdapter

{
	@Autowired
	private LowPriceBasicAuthenticationEntryPoint authenticationEntryPoint;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.authorizeRequests()
		    .requestMatchers("/public").permitAll()
		    .anyRequest().authenticated().and().httpBasic()
				.authenticationEntryPoint(authenticationEntryPoint);
		return http.build();
	}

	@Bean
	public InMemoryUserDetailsManager userDetailsService() {
		UserDetails user = User.withUsername("maurizio").password(passwordEncoder().encode("password")).roles("USER_ROLE")
				.build();
		return new InMemoryUserDetailsManager(user);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(8);
	}
	
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
	      UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	      CorsConfiguration config = new CorsConfiguration();
			config.setAllowedOrigins(Arrays.asList("*"));
			config.setAllowedMethods(Arrays.asList("*"));
			config.setAllowedHeaders(Arrays.asList("*"));
			config.setAllowCredentials(true);
	      config.applyPermitDefaultValues();
	      
	      source.registerCorsConfiguration("/api/v1/**", config);
	      source.registerCorsConfiguration("/api/**", config);
	      source.registerCorsConfiguration("/**", config);
	      return source;
	}	
}
