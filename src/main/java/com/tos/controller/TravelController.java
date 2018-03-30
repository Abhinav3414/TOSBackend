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
	public Travel addTravel(@RequestBody Travel travel) {
		return travelService.addTravel(travel);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value ="/travels/{id}" )
	public ResponseEntity<Travel> updateTravel(@Valid @RequestBody Travel travel, @PathVariable Long id) {
		return travelService.updateTravel(travel, id);
	}
	
	@DeleteMapping("/travels/{id}")
	public Travel deleteTravel(@PathVariable long id) {
		return travelService.deleteTravel(id);
	}
	
}
