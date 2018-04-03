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
	public ResponseEntity<Team> addTeam(@RequestBody Team team) {
		Team custTeam = teamService.addTeam(team);
		if(custTeam==null) {
			return new ResponseEntity<Team>(custTeam, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Team>(custTeam, HttpStatus.OK);
	}
	
	@PutMapping("/teams/{id}")
	public ResponseEntity<Void> updateTeam(@Valid @RequestBody Team team, @PathVariable Long id) {
		if(teamService.updateTeam(team, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/teams/{id}")
	public ResponseEntity<Void> deleteTeam(@PathVariable long id) {
		if(teamService.deleteTeam(id) ==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
