package com.tos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

	List<Address> getAddressByCustomerId(Long customerId);

}
