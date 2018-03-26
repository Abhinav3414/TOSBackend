package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
		teamMemberRepository.save(teamMember);
		return teamMemberRepository.findOne(teamMember.getId());
	}
	
	/*get a teamMember by id*/
	public TeamMember getTeamMember(Long teamMemberId) {
		return teamMemberRepository.findOne(teamMemberId);
	}

	/*to update a teamMember*/
	public ResponseEntity<TeamMember> updateTeamMember(TeamMember teamMemberData, long id) {
		TeamMember teamMember=teamMemberRepository.findOne(id);
		if(teamMember==null) {
			return ResponseEntity.notFound().build();
		}
		TeamMember updateTeamMember=teamMemberRepository.save(teamMemberData);
		return ResponseEntity.ok().body(updateTeamMember);
	}
	
	/*delete a teamMember*/
	public TeamMember deleteTeamMember(Long teamMemberId) {
		TeamMember teamMember = teamMemberRepository.findOne(teamMemberId);
		teamMemberRepository.delete(teamMemberId);
		return teamMember;
	}
}
