package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		return addressRepository.save(address);
	}
	
	/*get an address by id*/
	public Address getAddress(Long addressId) {
		return addressRepository.findOne(addressId);
	}

	/*to update an address*/
	public Address updateAddress(Address addressData, long id) {
		if(addressRepository.findOne(id)==null) {
			return null;
		}
		return addressRepository.save(addressData);
	}
	
	/*delete an address*/
	public boolean deleteAddress(Long addressId) {
		if(addressRepository.findOne(addressId)==null) {
			return false;
		}
		addressRepository.delete(addressId);
		return true;
	}
	
}
