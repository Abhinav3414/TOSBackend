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
		return teamRepository.save(team);
	}
	
	/*get a team by id*/
	public Team getTeam(Long teamId) {
		return teamRepository.findOne(teamId);
	}

	/*to update a team*/
	public Team updateTeam(Team teamData, long id) {
		if(teamRepository.findOne(id)==null) {
			return null;
		}
		return teamRepository.save(teamData);
	}
	
	/*delete a team*/
	public boolean deleteTeam(Long teamId) {
		if(teamRepository.findOne(teamId)==null) {
			return false;
		}
		teamRepository.delete(teamId);
		return true;
	}
	
}
