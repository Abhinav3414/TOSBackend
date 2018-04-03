package com.tos.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tos.model.StakeHolder;
import com.tos.service.StakeHolderService;

@RestController
@RequestMapping("/tos")
public class StakeHolderController {
	
	@Autowired
	private StakeHolderService stakeHolderService;

	@GetMapping("/stakeholders")
	public List<StakeHolder> getAllStakeHolder(){
		return stakeHolderService.getAllStakeHolder();
	}
	
	@GetMapping("/stakeholders/{id}")
	public StakeHolder getStakeHolder(@PathVariable long id) {
		return stakeHolderService.getStakeHolder(id);
	}
	
	@PostMapping("/stakeholders")
	public ResponseEntity<StakeHolder> addStakeHolder(@RequestBody StakeHolder stakeHolder) {
		StakeHolder sholder = stakeHolderService.addStakeHolder(stakeHolder);
		if(sholder==null) {
			return new ResponseEntity<StakeHolder>(sholder, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<StakeHolder>(sholder, HttpStatus.OK);
	}
	
	@PutMapping("/stakeholders/{id}")
	public ResponseEntity<Void> updateStakeHolder(@Valid @RequestBody StakeHolder stakeHolder, @PathVariable Long id) {
		if(stakeHolderService.updateStakeHolder(stakeHolder, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/stakeholders/{id}")
	public ResponseEntity<Void> deleteStakeHolder(@PathVariable long id) {
		if(stakeHolderService.deleteStakeHolder(id) ==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
