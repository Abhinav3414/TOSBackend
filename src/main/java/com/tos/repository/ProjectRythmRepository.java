package com.tos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.ProjectRythm;

public interface ProjectRythmRepository extends JpaRepository<ProjectRythm, Long> {

	List<ProjectRythm> getProjectRythmByTeamId(Long teamId);

}
