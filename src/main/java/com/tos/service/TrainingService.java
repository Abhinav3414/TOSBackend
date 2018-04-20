package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		return trainingRepository.save(training);
	}
	
	/*get a training by id*/
	public Training getTraining(Long trainingId) {
		return trainingRepository.findOne(trainingId);
	}

	/*to update a training*/
	public Training updateTraining(Training trainingData, long id) {
		if(trainingRepository.findOne(id)==null) {
			return null;
		}
		return trainingRepository.save(trainingData);
	}
	
	/*delete a training*/
	public boolean deleteTraining(Long trainingId) {
		if(trainingRepository.findOne(trainingId)==null) {
			return false;
		}
		trainingRepository.delete(trainingId);
		return true;
	}
	
}
