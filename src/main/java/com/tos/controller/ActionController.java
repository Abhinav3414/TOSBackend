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

import com.tos.model.Action;
import com.tos.service.ActionService;

@RestController
@RequestMapping("/tos")
public class ActionController {
	
	@Autowired
	private ActionService actionService;

	@GetMapping("/actions")
	public List<Action> getAllAction(){
		return actionService.getAllAction();
	}
	
	@GetMapping("/actions/{id}")
	public Action getAction(@PathVariable long id) {
		return actionService.getAction(id);
	}
	
	@PostMapping("/actions")
	public ResponseEntity<Action> addAction(@RequestBody Action action) {
		Action customerAction = actionService.addAction(action);
		if(customerAction==null) {
			return new ResponseEntity<Action>(customerAction, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Action>(customerAction, HttpStatus.OK);
	}
	
	@PutMapping("/actions/{id}")
	public ResponseEntity<Void> updateAction(@Valid @RequestBody Action action, @PathVariable Long id) {
		if(actionService.updateAction(action, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/actions/{id}")
	public ResponseEntity<Void> deleteAction(@PathVariable long id) {
		if(actionService.deleteAction(id) ==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
