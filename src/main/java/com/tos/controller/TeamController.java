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
import com.tos.service.TeamService;

@RestController
@RequestMapping("/tos")
public class TeamController {
	
	@Autowired
	private TeamService teamService;

	@GetMapping("/teams")
	public List<Team> getAllTeam(){
		return teamService.getAllTeam();
	}
	
	@GetMapping("/teams/{id}")
	public Team getTeam(@PathVariable long id) {
		return teamService.getTeam(id);
	}
	
	@PostMapping("/teams")
	public Team addTeam(@RequestBody Team team) {
		return teamService.addTeam(team);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value ="/teams/{id}" )
	public ResponseEntity<Team> updateTeam(@Valid @RequestBody Team team, @PathVariable Long id) {
		return teamService.updateTeam(team, id);
	}
	
	@DeleteMapping("/teams/{id}")
	public Team deleteTeam(@PathVariable long id) {
		return teamService.deleteTeam(id);
	}
	
}
