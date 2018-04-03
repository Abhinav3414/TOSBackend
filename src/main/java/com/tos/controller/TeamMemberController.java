package com.tos.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	public ResponseEntity<TeamMember> addTeamMember(@RequestBody TeamMember teamMember) {
		TeamMember tMember = teamMemberService.addTeamMember(teamMember);
		if(tMember==null) {
			return new ResponseEntity<TeamMember>(tMember, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<TeamMember>(tMember, HttpStatus.OK);
	}
	
	@PutMapping("/teammembers/{id}")
	public ResponseEntity<Void> updateTeamMember(@Valid @RequestBody TeamMember teamMember, @PathVariable Long id) {
		if(teamMemberService.updateTeamMember(teamMember, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/teammembers/{id}")
	public ResponseEntity<Void> deleteTeamMember(@PathVariable long id) {
		if(teamMemberService.deleteTeamMember(id)==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
