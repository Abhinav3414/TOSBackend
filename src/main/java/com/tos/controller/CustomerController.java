package com.tos.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
	public Customer addCustomer(@RequestBody Customer customer) {
		return customerService.addCustomer(customer);
	}
	
	@PutMapping("/customers/{id}")
	public ResponseEntity<Customer> updateCustomer(@Valid @RequestBody Customer customer, @PathVariable(value="id") Long id) {
		return customerService.updateCustomer(customer, id);
	}
	
	@DeleteMapping("/customers/{id}")
	public Customer deleteCustomer(@PathVariable long id) {
		return customerService.deleteCustomer(id);
	}
	
}
