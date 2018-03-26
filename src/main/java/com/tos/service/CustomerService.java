package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tos.model.Customer;
import com.tos.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	/* search all customers*/
	public List<Customer> getAllCustomer() {
		return customerRepository.findAll();
	}
	
	/*to save an customer*/
	public Customer addCustomer(Customer cust) {
		customerRepository.save(cust);
		return customerRepository.findOne(cust.getId());
	}
	
	/*get an customer by id*/
	public Customer getCustomer(Long custId) {
		return customerRepository.findOne(custId);
	}

	/*to update an customer*/
	public ResponseEntity<Customer> updateCustomer(Customer cust, long id) {
		Customer customer=customerRepository.findOne(id);
		if(customer==null) {
			return ResponseEntity.notFound().build();
		}
		Customer updateCustomer=customerRepository.save(cust);
		return ResponseEntity.ok().body(updateCustomer);
	}
	
	/*delete an customer*/
	public Customer deleteCustomer(Long custId) {
		Customer cust = customerRepository.findOne(custId);
		customerRepository.delete(custId);
		return cust;
	}
}
