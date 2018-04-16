package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tos.model.Action;
import com.tos.model.ProjectRythm;
import com.tos.model.Team;
import com.tos.model.TeamMember;
import com.tos.repository.ActionRepository;
import com.tos.repository.ProjectRythmRepository;
import com.tos.repository.TeamMemberRepository;
import com.tos.repository.TeamRepository;

@Service
public class TeamService {
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Autowired
	private TeamMemberRepository teamMemberRepository;
	
	@Autowired
	private ActionRepository actionRepository;
	
	@Autowired
	private ProjectRythmRepository projectRythmRepository;
	
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
		List<TeamMember> teamMembers = teamMemberRepository.getTeamMemberByTeamId(teamId);
		List<Action> teamActions = actionRepository.getActionByTeamId(teamId);
		List<ProjectRythm> teamProjectRythms = projectRythmRepository.getProjectRythmByTeamId(teamId);
		
		for (TeamMember teamMember : teamMembers) {
			teamMemberRepository.delete(teamMember.getId());
		}
		for (Action action : teamActions) {
			actionRepository.delete(action.getId());
		}
		for (ProjectRythm projectRythm : teamProjectRythms) {
			projectRythmRepository.delete(projectRythm.getId());
		}
		
		teamRepository.delete(teamId);
		return true;
	}
	
}
