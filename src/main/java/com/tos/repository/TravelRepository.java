package com.tos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Travel;

public interface TravelRepository extends JpaRepository<Travel, Long> {

}
