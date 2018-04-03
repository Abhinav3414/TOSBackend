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
	public ResponseEntity<Training> addTraining(@RequestBody Training training) {
		Training empTraining = trainingService.addTraining(training);
		if(empTraining ==null) {
			return new ResponseEntity<Training>(empTraining, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Training>(empTraining, HttpStatus.OK);
	}
	
	@PutMapping("/trainings/{id}")
	public ResponseEntity<Void> updateTraining(@Valid @RequestBody Training training, @PathVariable Long id) {
		if(trainingService.updateTraining(training, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/trainings/{id}")
	public ResponseEntity<Void> deleteTraining(@PathVariable long id) {
		if(trainingService.deleteTraining(id)==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
