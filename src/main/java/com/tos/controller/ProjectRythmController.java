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

import com.tos.model.ProjectRythm;
import com.tos.service.ProjectRythmService;

@RestController
@RequestMapping("/tos")
public class ProjectRythmController {
	
	@Autowired
	private ProjectRythmService projectRythmService;

	@GetMapping("/projectrythms")
	public List<ProjectRythm> getAllProjectRythm(){
		return projectRythmService.getAllProjectRythm();
	}
	
	@GetMapping("/projectrythms/{id}")
	public ProjectRythm getProjectRythm(@PathVariable long id) {
		return projectRythmService.getProjectRythm(id);
	}
	
	@PostMapping("/projectrythms")
	public ResponseEntity<ProjectRythm> addProjectRythm(@RequestBody ProjectRythm projectRythm) {
		ProjectRythm rythm = projectRythmService.addProjectRythm(projectRythm);
		if(rythm==null) {
			return new ResponseEntity<ProjectRythm>(rythm, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<ProjectRythm>(rythm, HttpStatus.OK);
	}
	
	@PutMapping("/projectrythms/{id}")
	public ResponseEntity<Void> updateProjectRythm(@Valid @RequestBody ProjectRythm projectRythm, @PathVariable Long id) {
		if(projectRythmService.updateProjectRythm(projectRythm, id) ==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/projectrythms/{id}")
	public ResponseEntity<Void> deleteProjectRythm(@PathVariable long id) {
		if(projectRythmService.deleteProjectRythm(id)==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
