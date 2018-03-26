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

import com.tos.model.Goal;
import com.tos.service.GoalService;

@RestController
@RequestMapping("/tos")
public class GoalController {
	
	@Autowired
	private GoalService goalService;

	@GetMapping("/goals")
	public List<Goal> getAllGoal(){
		return goalService.getAllGoal();
	}
	
	@GetMapping("/goals/{id}")
	public Goal getGoal(@PathVariable long id) {
		return goalService.getGoal(id);
	}
	
	@PostMapping("/goals")
	public Goal addGoal(@RequestBody Goal goal) {
		return goalService.addGoal(goal);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value ="/goals/{id}" )
	public ResponseEntity<Goal> updateGoal(@Valid @RequestBody Goal goal, @PathVariable Long id) {
		return goalService.updateGoal(goal, id);
	}
	
	@DeleteMapping("/goals/{id}")
	public Goal deleteGoal(@PathVariable long id) {
		return goalService.deleteGoal(id);
	}
	
}
