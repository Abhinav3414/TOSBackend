package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		return stakeHolderRepository.save(stakeHolder);
	}
	
	/*get a stakeHolder by id*/
	public StakeHolder getStakeHolder(Long stakeHolderId) {
		return stakeHolderRepository.findOne(stakeHolderId);
	}

	/*to update a stakeHolder*/
	public StakeHolder updateStakeHolder(StakeHolder stakeHolderData, long id) {
		if(stakeHolderRepository.findOne(id)==null) {
			return null;
		}
		return stakeHolderRepository.save(stakeHolderData);
	}
	
	/*delete a stakeHolder*/
	public boolean deleteStakeHolder(Long stakeHolderId) {
		if(stakeHolderRepository.findOne(stakeHolderId)==null) {
			return false;
		}
		stakeHolderRepository.delete(stakeHolderId);
		return true;
	}
	
}
