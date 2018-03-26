package com.tos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
