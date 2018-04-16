package com.tos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {

	List<Team> getTeamByCustomerId(Long custId);

}
