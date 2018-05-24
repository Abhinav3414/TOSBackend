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

import com.tos.model.Risk;
import com.tos.service.RiskService;

@RestController
@RequestMapping("/tos")
public class RiskController {
	
	@Autowired
	private RiskService riskService;

	@GetMapping("/risks")
	public List<Risk> getAllRisk(){
		return riskService.getAllRisk();
	}
	
	@GetMapping("/risks/{id}")
	public Risk getRisk(@PathVariable long id) {
		return riskService.getRisk(id);
	}
	
	@PostMapping("/risks")
	public ResponseEntity<Risk> addRisk(@RequestBody Risk risk) {
		Risk customerRisk = riskService.addRisk(risk);
		if(customerRisk==null) {
			return new ResponseEntity<Risk>(customerRisk, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Risk>(customerRisk, HttpStatus.OK);
	}
	
	@PutMapping("/risks/{id}")
	public ResponseEntity<Void> updateRisk(@Valid @RequestBody Risk risk, @PathVariable Long id) {
		if(riskService.updateRisk(risk, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/risks/{id}")
	public ResponseEntity<Void> deleteRisk(@PathVariable long id) {
		if(riskService.deleteRisk(id) ==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
