package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
		actionRepository.save(action);
		return actionRepository.findOne(action.getId());
	}
	
	/*get a action by id*/
	public Action getAction(Long actionId) {
		return actionRepository.findOne(actionId);
	}

	/*to update a action*/
	public ResponseEntity<Action> updateAction(Action actionData, long id) {
		Action action=actionRepository.findOne(id);
		if(action==null) {
			return ResponseEntity.notFound().build();
		}
		Action updateAction=actionRepository.save(actionData);
		return ResponseEntity.ok().body(updateAction);
	}
	
	/*delete a action*/
	public Action deleteAction(Long actionId) {
		Action action = actionRepository.findOne(actionId);
		actionRepository.delete(actionId);
		return action;
	}
}
