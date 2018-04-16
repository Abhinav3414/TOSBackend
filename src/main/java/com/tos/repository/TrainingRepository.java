package com.tos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Training;

public interface TrainingRepository extends JpaRepository<Training, Long> {

	List<Training> getTrainingByEmployeeId(Long empId);

}
