package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		return goalRepository.save(goal);
	}
	
	/*get a goal by id*/
	public Goal getGoal(Long goalId) {
		return goalRepository.findOne(goalId);
	}

	/*to update a goal*/
	public Goal updateGoal(Goal goalData, long id) {
		if(goalRepository.findOne(id)==null) {
			return null;
		}
		return goalRepository.save(goalData);
	}
	
	/*delete a goal*/
	
	public boolean deleteGoal(Long goalId) {
		if(goalRepository.findOne(goalId)==null) {
			return false;
		}
		goalRepository.delete(goalId);
		return true;
	}
	
	
}
