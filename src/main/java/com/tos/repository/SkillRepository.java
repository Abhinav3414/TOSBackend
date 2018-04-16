package com.tos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Skill;

public interface SkillRepository extends JpaRepository<Skill, Long> {

	List<Skill> getSkillByEmployeeId(Long empId);

}
