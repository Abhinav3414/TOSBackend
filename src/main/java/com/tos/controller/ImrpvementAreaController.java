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

import com.tos.model.ImprovementArea;
import com.tos.service.ImprovementAreaService;

@RestController
@RequestMapping("/tos")
public class ImrpvementAreaController {
	
	@Autowired
	private ImprovementAreaService improvementAreaService;

	@GetMapping("/improvementareas")
	public List<ImprovementArea> getAllImprovementArea(){
		return improvementAreaService.getAllImprovementArea();
	}
	
	@GetMapping("/improvementareas/{id}")
	public ImprovementArea getImprovementArea(@PathVariable long id) {
		return improvementAreaService.getImprovementArea(id);
	}
	
	@PostMapping("/improvementareas")
	public ImprovementArea addImprovementArea(@RequestBody ImprovementArea improvementArea) {
		return improvementAreaService.addImprovementArea(improvementArea);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value ="/improvementareas/{id}" )
	public ResponseEntity<ImprovementArea> updateImprovementArea(@Valid @RequestBody ImprovementArea improvementArea, @PathVariable Long id) {
		return improvementAreaService.updateImprovementArea(improvementArea, id);
	}
	
	@DeleteMapping("/improvementareas/{id}")
	public ImprovementArea deleteSkill(@PathVariable long id) {
		return improvementAreaService.deleteImprovementArea(id);
	}
	
}
