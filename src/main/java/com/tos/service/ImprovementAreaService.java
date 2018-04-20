package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tos.model.ImprovementArea;
import com.tos.repository.ImprovementAreaRepository;

@Service
public class ImprovementAreaService {
	
	@Autowired
	private ImprovementAreaRepository improvementAreaRepository;
	
	/* search all improvementArea*/
	public List<ImprovementArea> getAllImprovementArea() {
		return improvementAreaRepository.findAll();
	}
	
	/*to save a improvementArea */
	public ImprovementArea addImprovementArea(ImprovementArea improvementArea) {
		return improvementAreaRepository.save(improvementArea);
	}
	
	/*get a improvementArea by id*/
	public ImprovementArea getImprovementArea(Long improvementAreaId) {
		return improvementAreaRepository.findOne(improvementAreaId);
	}

	/*to update a improvementArea*/
	public ImprovementArea updateImprovementArea(ImprovementArea improvementAreaData, long id) {
		if(improvementAreaRepository.findOne(id)==null) {
			return null;
		}
		return improvementAreaRepository.save(improvementAreaData);
	}
	
	/*delete a improvementArea*/
	public boolean deleteImprovementArea(Long improvementAreaId) {
		if(improvementAreaRepository.findOne(improvementAreaId)==null) {
			return false;
		}
		improvementAreaRepository.delete(improvementAreaId);
		return true;
	}
	
	
}
