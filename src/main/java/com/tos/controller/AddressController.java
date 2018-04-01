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

import com.tos.model.Address;
import com.tos.service.AddressService;

@RestController
@RequestMapping("/tos")
public class AddressController {
	
	@Autowired
	private AddressService addressService;

	@GetMapping("/addresses")
	public List<Address> getAllAddress(){
		return addressService.getAllAddress();
	}
	
	@GetMapping("/addresses/{id}")
	public Address getAddress(@PathVariable long id) {
		return addressService.getAddress(id);
	}
	
	@PostMapping("/addresses")
	public ResponseEntity<Address> addAddress(@RequestBody Address address) {
		Address add = addressService.addAddress(address);
		if(add ==null) {
			return new ResponseEntity<Address>(add, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Address>(add, HttpStatus.OK);
	}
	
	@PutMapping("/addresses/{id}")
	public ResponseEntity<Void> updateAddress(@Valid @RequestBody Address address, @PathVariable Long id) {
		if(addressService.updateAddress(address, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/addresses/{id}")
	public ResponseEntity<Void> deleteAddress(@PathVariable long id) {
		if(addressService.deleteAddress(id) ==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
	}
	
}
