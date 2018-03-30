package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tos.model.Travel;
import com.tos.repository.TravelRepository;

@Service
public class TravelService {
	
	@Autowired
	private TravelRepository travelRepository;
	
	/* search all travels*/
	public List<Travel> getAllTravel() {
		return travelRepository.findAll();
	}
	
	/*to save a travel */
	public Travel addTravel(Travel travel) {
		travelRepository.save(travel);
		return travelRepository.findOne(travel.getId());
	}
	
	/*get a travel by id*/
	public Travel getTravel(Long travelId) {
		return travelRepository.findOne(travelId);
	}

	/*to update a travel*/
	public ResponseEntity<Travel> updateTravel(Travel travelData, long id) {
		Travel travel=travelRepository.findOne(id);
		if(travel==null) {
			return ResponseEntity.notFound().build();
		}
		Travel updateTravel=travelRepository.save(travelData);
		return ResponseEntity.ok().body(updateTravel);
	}
	
	/*delete a travel*/
	public Travel deleteTravel(Long travelId) {
		Travel emp = travelRepository.findOne(travelId);
		travelRepository.delete(travelId);
		return emp;
	}
}
