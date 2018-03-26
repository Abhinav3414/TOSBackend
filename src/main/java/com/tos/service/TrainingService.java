package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tos.model.Training;
import com.tos.repository.TrainingRepository;

@Service
public class TrainingService {
	
	@Autowired
	private TrainingRepository trainingRepository;
	
	/* search all training*/
	public List<Training> getAllTraining() {
		return trainingRepository.findAll();
	}
	
	/*to save a training */
	public Training addTraining(Training training) {
		trainingRepository.save(training);
		return trainingRepository.findOne(training.getId());
	}
	
	/*get a training by id*/
	public Training getTraining(Long trainingId) {
		return trainingRepository.findOne(trainingId);
	}

	/*to update a training*/
	public ResponseEntity<Training> updateTraining(Training trainingData, long id) {
		Training training=trainingRepository.findOne(id);
		if(training==null) {
			return ResponseEntity.notFound().build();
		}
		Training updateTraining = trainingRepository.save(trainingData);
		return ResponseEntity.ok().body(updateTraining);
	}
	
	/*delete a training*/
	public Training deleteTraining(Long trainingId) {
		Training training = trainingRepository.findOne(trainingId);
		trainingRepository.delete(trainingId);
		return training;
	}
}
