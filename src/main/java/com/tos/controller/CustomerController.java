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

import com.tos.model.Customer;
import com.tos.service.CustomerService;

@RestController
@RequestMapping("/tos")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;

	@GetMapping("/customers")
	public List<Customer> getAllCustomers(){
		return customerService.getAllCustomer();
	}
	
	@GetMapping("/customers/{id}")
	public Customer getCustomer(@PathVariable long id) {
		return customerService.getCustomer(id);
	}
	
	@PostMapping("/customers")
	public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer) {
		Customer cust = customerService.addCustomer(customer);
		if(cust==null) {
			return new ResponseEntity<Customer>(cust, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Customer>(cust,HttpStatus.OK);
	}
	
	@PutMapping("/customers/{id}")
	public ResponseEntity<Void> updateCustomer(@Valid @RequestBody Customer customer, @PathVariable(value="id") Long id) {
		
		if(customerService.updateCustomer(customer, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/customers/{id}")
	public ResponseEntity<Void> deleteCustomer(@PathVariable long id) {
		if(customerService.deleteCustomer(id) ==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
