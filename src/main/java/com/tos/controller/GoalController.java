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
	public ResponseEntity<Goal> addGoal(@RequestBody Goal goal) {
		Goal custGoal = goalService.addGoal(goal);
		if(custGoal==null) {
			return new ResponseEntity<Goal>(custGoal, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Goal>(custGoal, HttpStatus.OK);
	}
	
	@PutMapping("/goals/{id}")
	public ResponseEntity<Void> updateGoal(@Valid @RequestBody Goal goal, @PathVariable Long id) {
		if(goalService.updateGoal(goal, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/goals/{id}")
	public ResponseEntity<Void> deleteGoal(@PathVariable long id) {
		if(goalService.deleteGoal(id)==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	
}
