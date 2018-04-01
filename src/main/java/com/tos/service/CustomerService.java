package com.tos.service;

import java.util.List;

import javax.validation.constraints.NotNull;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
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
		return customerRepository.save(cust);
	}
	
	/*get an customer by id*/
	public Customer getCustomer(Long custId) {
		return customerRepository.findOne(custId);
	}

	/*to update an customer*/
	public Customer updateCustomer(Customer cust, long id) {
		if(customerRepository.findOne(id)==null) {
			return null;
		}
		return customerRepository.save(cust);
	}
	
	/*delete an customer*/
	public boolean deleteCustomer(Long custId) {
		
		if(customerRepository.findOne(custId)==null) {
			return false;
		}
		customerRepository.delete(custId);
		return true;
	}
	
}
