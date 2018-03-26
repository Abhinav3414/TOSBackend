package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
		improvementAreaRepository.save(improvementArea);
		return improvementAreaRepository.findOne(improvementArea.getId());
	}
	
	/*get a improvementArea by id*/
	public ImprovementArea getImprovementArea(Long improvementAreaId) {
		return improvementAreaRepository.findOne(improvementAreaId);
	}

	/*to update a improvementArea*/
	public ResponseEntity<ImprovementArea> updateImprovementArea(ImprovementArea improvementAreaData, long id) {
		ImprovementArea improvementArea=improvementAreaRepository.findOne(id);
		if(improvementArea==null) {
			return ResponseEntity.notFound().build();
		}
		ImprovementArea updateImprovementArea = improvementAreaRepository.save(improvementAreaData);
		return ResponseEntity.ok().body(updateImprovementArea);
	}
	
	/*delete a improvementArea*/
	public ImprovementArea deleteImprovementArea(Long improvementAreaId) {
		ImprovementArea improvementArea = improvementAreaRepository.findOne(improvementAreaId);
		improvementAreaRepository.delete(improvementAreaId);
		return improvementArea;
	}
}
