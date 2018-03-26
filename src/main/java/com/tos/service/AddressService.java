package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tos.model.Address;
import com.tos.repository.AddressRepository;

@Service
public class AddressService {
	
	@Autowired
	private AddressRepository addressRepository;
	
	/* search all addresses*/
	public List<Address> getAllAddress() {
		return addressRepository.findAll();
	}
	
	/*to save an address */
	public Address addAddress(Address address) {
		addressRepository.save(address);
		return addressRepository.findOne(address.getId());
	}
	
	/*get an address by id*/
	public Address getAddress(Long addressId) {
		return addressRepository.findOne(addressId);
	}

	/*to update an address*/
	public ResponseEntity<Address> updateAddress(Address addressData, long id) {
		Address address=addressRepository.findOne(id);
		if(address==null) {
			return ResponseEntity.notFound().build();
		}
		Address updateAddress=addressRepository.save(addressData);
		return ResponseEntity.ok().body(updateAddress);
	}
	
	/*delete an address*/
	public Address deleteAddress(Long addressId) {
		Address address = addressRepository.findOne(addressId);
		addressRepository.delete(addressId);
		return address;
	}
}
