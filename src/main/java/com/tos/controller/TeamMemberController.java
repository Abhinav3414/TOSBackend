package com.tos.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tos.model.Team;
import com.tos.model.TeamMember;
import com.tos.service.TeamMemberService;

@RestController
@RequestMapping("/tos")
public class TeamMemberController {
	
	@Autowired
	private TeamMemberService teamMemberService;

	@GetMapping("/teammembers")
	public List<TeamMember> getAllTeamMember(){
		return teamMemberService.getAllTeamMember();
	}
	
	@GetMapping("/teammembers/{id}")
	public TeamMember getTeamMember(@PathVariable long id) {
		return teamMemberService.getTeamMember(id);
	}
	
	@PostMapping("/teammembers")
	public TeamMember addTeamMember(@RequestBody TeamMember teamMember) {
		return teamMemberService.addTeamMember(teamMember);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value ="/teammembers/{id}" )
	public ResponseEntity<TeamMember> updateTeamMember(@Valid @RequestBody TeamMember teamMember, @PathVariable Long id) {
		return teamMemberService.updateTeamMember(teamMember, id);
	}
	
	@DeleteMapping("/teammembers/{id}")
	public TeamMember deleteTeamMember(@PathVariable long id) {
		return teamMemberService.deleteTeamMember(id);
	}
	
}
