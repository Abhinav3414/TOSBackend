package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tos.model.Risk;
import com.tos.repository.RiskRepository;

@Service
public class RiskService {
	
	@Autowired
	private RiskRepository riskRepository;
	
	/* search all risks*/
	public List<Risk> getAllRisk() {
		return riskRepository.findAll();
	}
	
	/*to save a risk */
	public Risk addRisk(Risk risk) {
		return riskRepository.save(risk);
	}
	
	/*get a risk by id*/
	public Risk getRisk(Long riskId) {
		return riskRepository.findOne(riskId);
	}

	/*to update a risk*/
	public Risk updateRisk(Risk riskData, long id) {
		if(riskRepository.findOne(id)==null) {
			return null;
		}
		return riskRepository.save(riskData);
	}
	
	/*delete a risk*/
	public boolean deleteRisk(Long riskId) {
		if(riskRepository.findOne(riskId)==null) {
			return false;
		}
		riskRepository.delete(riskId);
		return true;
	}
	
	
}
