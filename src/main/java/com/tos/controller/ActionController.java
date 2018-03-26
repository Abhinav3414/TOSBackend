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
	public Action addAction(@RequestBody Action action) {
		return actionService.addAction(action);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value ="/actions/{id}" )
	public ResponseEntity<Action> updateAction(@Valid @RequestBody Action action, @PathVariable Long id) {
		return actionService.updateAction(action, id);
	}
	
	@DeleteMapping("/actions/{id}")
	public Action deleteAction(@PathVariable long id) {
		return actionService.deleteAction(id);
	}
	
}
