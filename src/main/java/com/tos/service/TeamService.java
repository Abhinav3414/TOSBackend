package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tos.model.Team;
import com.tos.repository.TeamRepository;

@Service
public class TeamService {
	
	@Autowired
	private TeamRepository teamRepository;
	
	/* search all teams*/
	public List<Team> getAllTeam() {
		return teamRepository.findAll();
	}
	
	/*to save a team */
	public Team addTeam(Team team) {
		teamRepository.save(team);
		return teamRepository.findOne(team.getId());
	}
	
	/*get a team by id*/
	public Team getTeam(Long teamId) {
		return teamRepository.findOne(teamId);
	}

	/*to update a team*/
	public ResponseEntity<Team> updateTeam(Team teamData, long id) {
		Team team=teamRepository.findOne(id);
		if(team==null) {
			return ResponseEntity.notFound().build();
		}
		Team updateTeam=teamRepository.save(teamData);
		return ResponseEntity.ok().body(updateTeam);
	}
	
	/*delete a team*/
	public Team deleteTeam(Long teamId) {
		Team team = teamRepository.findOne(teamId);
		teamRepository.delete(teamId);
		return team;
	}
}
