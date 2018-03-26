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

import com.tos.model.Training;
import com.tos.service.TrainingService;

@RestController
@RequestMapping("/tos")
public class TrainingController {
	
	@Autowired
	private TrainingService trainingService;

	@GetMapping("/trainings")
	public List<Training> getAllTraining(){
		return trainingService.getAllTraining();
	}
	
	@GetMapping("/trainings/{id}")
	public Training getTraining(@PathVariable long id) {
		return trainingService.getTraining(id);
	}
	
	@PostMapping("/trainings")
	public Training addTraining(@RequestBody Training training) {
		return trainingService.addTraining(training);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value ="/trainings/{id}" )
	public ResponseEntity<Training> updateTraining(@Valid @RequestBody Training training, @PathVariable Long id) {
		return trainingService.updateTraining(training, id);
	}
	
	@DeleteMapping("/trainings/{id}")
	public Training deleteSkill(@PathVariable long id) {
		return trainingService.deleteTraining(id);
	}
	
}
