package com.tos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.ImprovementArea;

public interface ImprovementAreaRepository extends JpaRepository<ImprovementArea, Long> {

	List<ImprovementArea> getImprovementAreaByEmployeeId(Long empId);

}
