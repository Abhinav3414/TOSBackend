package com.tos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.StakeHolder;

public interface StakeHolderRepository extends JpaRepository<StakeHolder, Long> {
	
	List<StakeHolder> getStakeHolderByCustomerId(Long customerId);

}
