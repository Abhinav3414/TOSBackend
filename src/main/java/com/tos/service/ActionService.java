package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tos.model.Action;
import com.tos.repository.ActionRepository;

@Service
public class ActionService {
	
	@Autowired
	private ActionRepository actionRepository;
	
	/* search all actions*/
	public List<Action> getAllAction() {
		return actionRepository.findAll();
	}
	
	/*to save a action */
	public Action addAction(Action action) {
		return actionRepository.save(action);
	}
	
	/*get a action by id*/
	public Action getAction(Long actionId) {
		return actionRepository.findOne(actionId);
	}

	/*to update a action*/
	public Action updateAction(Action actionData, long id) {
		if(actionRepository.findOne(id)==null) {
			return null;
		}
		return actionRepository.save(actionData);
	}
	
	/*delete a action*/
	public boolean deleteAction(Long actionId) {
		if(actionRepository.findOne(actionId)==null) {
			return false;
		}
		actionRepository.delete(actionId);
		return true;
	}
	
	
}
