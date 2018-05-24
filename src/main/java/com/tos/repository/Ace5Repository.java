package com.tos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Ace5;

public interface Ace5Repository extends JpaRepository<Ace5, Long> {

	Ace5 getAce5ByCustomerId(Long customerId);
}
