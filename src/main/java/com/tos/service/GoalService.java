package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tos.model.Goal;
import com.tos.repository.GoalRepository;

@Service
public class GoalService {
	
	@Autowired
	private GoalRepository goalRepository;
	
	/* search all goals*/
	public List<Goal> getAllGoal() {
		return goalRepository.findAll();
	}
	
	/*to save a goal */
	public Goal addGoal(Goal goal) {
		goalRepository.save(goal);
		return goalRepository.findOne(goal.getId());
	}
	
	/*get a goal by id*/
	public Goal getGoal(Long goalId) {
		return goalRepository.findOne(goalId);
	}

	/*to update a goal*/
	public ResponseEntity<Goal> updateGoal(Goal goalData, long id) {
		Goal goal=goalRepository.findOne(id);
		if(goal==null) {
			return ResponseEntity.notFound().build();
		}
		Goal updateGoal=goalRepository.save(goalData);
		return ResponseEntity.ok().body(updateGoal);
	}
	
	/*delete a goal*/
	public Goal deleteGoal(Long goalId) {
		Goal emp = goalRepository.findOne(goalId);
		goalRepository.delete(goalId);
		return emp;
	}
}
