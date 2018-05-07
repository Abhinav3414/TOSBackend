package com.tos;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

import com.tos.config.CustomUserDetails;
import com.tos.model.Role;
import com.tos.model.User;
import com.tos.repository.UserRepository;

@SpringBootApplication
@EnableJpaAuditing
public class TosApplication {

	public static void main(String[] args) {
		SpringApplication.run(TosApplication.class, args);
	}

	@Autowired
	public void authenticationManager(AuthenticationManagerBuilder builder, UserRepository repo) throws Exception {
		
		if(repo.count() == 0) {
			repo.save(new User("user","email","user", Arrays.asList(new Role("USER"), new Role("ACTUATOR"))));
		}
		builder.userDetailsService(s -> new CustomUserDetails(repo.findByUsername(s)));
	}

	
}
