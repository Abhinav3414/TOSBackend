package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tos.model.Align;
import com.tos.repository.AlignRepository;

@Service
public class AlignService {
	
	@Autowired
	private AlignRepository alignRepository;
	
	/* search all aligns*/
	public List<Align> getAllAlign() {
		return alignRepository.findAll();
	}
	
	/*to save a align */
	public Align addAlign(Align align) {
		return alignRepository.save(align);
	}
	
	/*get a align by id*/
	public Align getAlign(Long alignId) {
		return alignRepository.findOne(alignId);
	}

	/*to update a align*/
	public Align updateAlign(Align alignData, long id) {
		if(alignRepository.findOne(id)==null) {
			return null;
		}
		return alignRepository.save(alignData);
	}
	
	/*delete a align*/
	
	public boolean deleteAlign(Long alignId) {
		if(alignRepository.findOne(alignId)==null) {
			return false;
		}
		alignRepository.delete(alignId);
		return true;
	}
	
	
}
