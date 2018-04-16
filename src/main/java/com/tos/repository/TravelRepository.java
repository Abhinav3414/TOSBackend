package com.tos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Travel;

public interface TravelRepository extends JpaRepository<Travel, Long> {
	
	List<Travel> getTravelByCustomerId(Long customerId);

}
