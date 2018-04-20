package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	/*get a travel by id*/
	public Travel getTravel(Long travelId) {
		return travelRepository.findOne(travelId);
	}

	/*to save a travel */
	public Travel addTravel(Travel travel) {
		return travelRepository.save(travel);
	}
	
	/*to update a travel*/
	public Travel updateTravel(Travel travelData, long id) {
		if(travelRepository.findOne(id)==null) {
			return null;
		}
		return travelRepository.save(travelData);
	}
	
	/*delete a travel*/
	public boolean deleteTravel(Long travelId) {
		if(travelRepository.findOne(travelId)==null) {
			return false;
		}
		travelRepository.delete(travelId);
		return true;
	}
}
