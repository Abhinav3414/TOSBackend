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

import com.tos.model.Travel;
import com.tos.service.TravelService;

@RestController
@RequestMapping("/tos")
public class TravelController {
	
	@Autowired
	private TravelService travelService;

	@GetMapping("/travels")
	public List<Travel> getAllTravel(){
		return travelService.getAllTravel();
	}
	
	@GetMapping("/travels/{id}")
	public Travel getTravel(@PathVariable long id) {
		return travelService.getTravel(id);
	}
	
	@PostMapping("/travels")
	public ResponseEntity<Travel> addTravel(@RequestBody Travel travel) {
		Travel custTravel = travelService.addTravel(travel);
		if(custTravel==null) {
			return new ResponseEntity<Travel>(custTravel, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Travel>(custTravel, HttpStatus.OK);
	}
	
	@PutMapping("/travels/{id}")
	public ResponseEntity<Void> updateTravel(@Valid @RequestBody Travel travel, @PathVariable Long id) {
		if(travelService.updateTravel(travel, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/travels/{id}")
	public ResponseEntity<Void> deleteTravel(@PathVariable long id) {
		if(travelService.deleteTravel(id)==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
