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

import com.tos.model.Ace5;
import com.tos.service.Ace5Service;

@RestController
@RequestMapping("/tos")
public class Ace5Controller {
	
	@Autowired
	private Ace5Service ace5Service;

	@GetMapping("/ace5s")
	public List<Ace5> getAllAce5(){
		return ace5Service.getAllAce5();
	}
	
	@GetMapping("/ace5s/{id}")
	public Ace5 getAce5(@PathVariable long id) {
		return ace5Service.getAce5(id);
	}
	
	@PostMapping("/ace5s")
	public ResponseEntity<Ace5> addAce5(@RequestBody Ace5 ace5) {
		Ace5 custAce5 = ace5Service.addAce5(ace5);
		if(custAce5==null) {
			return new ResponseEntity<Ace5>(custAce5, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Ace5>(custAce5, HttpStatus.OK);
	}
	
	@PutMapping("/ace5s/{id}")
	public ResponseEntity<Void> updateAce5(@Valid @RequestBody Ace5 ace5, @PathVariable Long id) {
		if(ace5Service.updateAce5(ace5, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/ace5s/{id}")
	public ResponseEntity<Void> deleteAce5(@PathVariable long id) {
		if(ace5Service.deleteAce5(id)==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	
}
