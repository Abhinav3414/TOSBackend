package com.tos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {

}
