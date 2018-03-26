package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tos.model.StakeHolder;
import com.tos.repository.StakeHolderRepository;

@Service
public class StakeHolderService {
	
	@Autowired
	private StakeHolderRepository stakeHolderRepository;
	
	/* search all stakeHolders*/
	public List<StakeHolder> getAllStakeHolder() {
		return stakeHolderRepository.findAll();
	}
	
	/*to save a stakeHolder */
	public StakeHolder addStakeHolder(StakeHolder stakeHolder) {
		stakeHolderRepository.save(stakeHolder);
		return stakeHolderRepository.findOne(stakeHolder.getId());
	}
	
	/*get a stakeHolder by id*/
	public StakeHolder getStakeHolder(Long stakeHolderId) {
		return stakeHolderRepository.findOne(stakeHolderId);
	}

	/*to update a stakeHolder*/
	public ResponseEntity<StakeHolder> updateStakeHolder(StakeHolder stakeHolderData, long id) {
		StakeHolder stakeHolder=stakeHolderRepository.findOne(id);
		if(stakeHolder==null) {
			return ResponseEntity.notFound().build();
		}
		StakeHolder updateStakeHolder=stakeHolderRepository.save(stakeHolderData);
		return ResponseEntity.ok().body(updateStakeHolder);
	}
	
	/*delete a stakeHolder*/
	public StakeHolder deleteStakeHolder(Long stakeHolderId) {
		StakeHolder emp = stakeHolderRepository.findOne(stakeHolderId);
		stakeHolderRepository.delete(stakeHolderId);
		return emp;
	}
}
