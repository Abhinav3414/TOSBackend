package com.tos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Align;

public interface AlignRepository extends JpaRepository<Align, Long> {

	//List<Align> getAlignByCustomerId(Long customerId);
}
