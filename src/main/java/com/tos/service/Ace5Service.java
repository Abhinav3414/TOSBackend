package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tos.model.Ace5;
import com.tos.model.Action;
import com.tos.repository.Ace5Repository;

@Service
public class Ace5Service {
	
	@Autowired
	private Ace5Repository ace5Repository;
	
	/* search all ace5s*/
	public List<Ace5> getAllAce5() {
		return ace5Repository.findAll();
	}
	
	/*to save a ace5 */
	public Ace5 addAce5(Ace5 ace5) {
		return ace5Repository.save(ace5);
	}
	
	/*get a ace5 by id*/
	public Ace5 getAce5(Long customerId) {
		return ace5Repository.getAce5ByCustomerId(customerId);
	}

	/*to update a ace5*/
	public Ace5 updateAce5(Ace5 ace5Data, long id) {
		if(ace5Repository.findOne(id)==null) {
			return null;
		}
		return ace5Repository.save(ace5Data);
	}
	
	/*delete a ace5*/
	
	public boolean deleteAce5(Long ace5Id) {
		if(ace5Repository.findOne(ace5Id)==null) {
			return false;
		}
		ace5Repository.delete(ace5Id);
		return true;
	}
	
	
}
