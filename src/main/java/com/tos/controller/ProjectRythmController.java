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
	public ProjectRythm addProjectRythm(@RequestBody ProjectRythm projectRythm) {
		return projectRythmService.addProjectRythm(projectRythm);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value ="/projectrythms/{id}" )
	public ResponseEntity<ProjectRythm> updateProjectRythm(@Valid @RequestBody ProjectRythm projectRythm, @PathVariable Long id) {
		return projectRythmService.updateProjectRythm(projectRythm, id);
	}
	
	@DeleteMapping("/projectrythms/{id}")
	public ProjectRythm deleteProjectRythm(@PathVariable long id) {
		return projectRythmService.deleteProjectRythm(id);
	}
	
}
