package com.tos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
