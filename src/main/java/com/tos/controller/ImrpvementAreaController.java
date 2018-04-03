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
	public ResponseEntity<ImprovementArea> addImprovementArea(@RequestBody ImprovementArea improvementArea) {
		ImprovementArea impArea = improvementAreaService.addImprovementArea(improvementArea);
		if(impArea==null) {
			return new ResponseEntity<ImprovementArea>(impArea, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<ImprovementArea>(impArea, HttpStatus.OK);
	}
	
	@PutMapping("/improvementareas/{id}")
	public ResponseEntity<Void> updateImprovementArea(@Valid @RequestBody ImprovementArea improvementArea, @PathVariable Long id) {
		if(improvementAreaService.updateImprovementArea(improvementArea, id) ==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/improvementareas/{id}")
	public ResponseEntity<Void> deleteImprovementArea(@PathVariable long id) {
		if(improvementAreaService.deleteImprovementArea(id)==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
