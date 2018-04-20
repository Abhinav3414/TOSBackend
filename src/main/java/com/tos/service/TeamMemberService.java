package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tos.model.TeamMember;
import com.tos.repository.TeamMemberRepository;

@Service
public class TeamMemberService {
	
	@Autowired
	private TeamMemberRepository teamMemberRepository;
	
	/* search all teamMembers*/
	public List<TeamMember> getAllTeamMember() {
		return teamMemberRepository.findAll();
	}
	
	/*to save a teamMember */
	public TeamMember addTeamMember(TeamMember teamMember) {
		return teamMemberRepository.save(teamMember);
	}
	
	/*get a teamMember by id*/
	public TeamMember getTeamMember(Long teamMemberId) {
		return teamMemberRepository.findOne(teamMemberId);
	}

	/*to update a teamMember*/
	public TeamMember updateTeamMember(TeamMember teamMemberData, long id) {
		if(teamMemberRepository.findOne(id)==null) {
			return null;
		}
		return teamMemberRepository.save(teamMemberData);
	}
	
	/*delete a teamMember*/
	public boolean deleteTeamMember(Long teamMemberId) {
		if(teamMemberRepository.findOne(teamMemberId)==null) {
			return false;
		}
		teamMemberRepository.delete(teamMemberId);
		return true;
	}
	
	
}
