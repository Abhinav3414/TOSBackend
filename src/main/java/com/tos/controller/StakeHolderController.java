package com.tos.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	public StakeHolder addStakeHolder(@RequestBody StakeHolder stakeHolder) {
		return stakeHolderService.addStakeHolder(stakeHolder);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value ="/stakeholders/{id}" )
	public ResponseEntity<StakeHolder> updateStakeHolder(@Valid @RequestBody StakeHolder stakeHolder, @PathVariable Long id) {
		return stakeHolderService.updateStakeHolder(stakeHolder, id);
	}
	
	@DeleteMapping("/stakeholders/{id}")
	public StakeHolder deleteStakeHolder(@PathVariable long id) {
		return stakeHolderService.deleteStakeHolder(id);
	}
	
}
