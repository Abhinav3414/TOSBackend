package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tos.model.User;
import com.tos.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	/* search all users*/
	public List<User> getAllUser() {
		return userRepository.findAll();
	}
	
	/*to save a user */
	public User addUser(User user) {
		//User tempUser = new User(user.getUsername(), user.getEmail(), user.getPassword(),Arrays.asList(new Role("USER"), new Role("ACTUATOR")));
		return userRepository.save(user);
	}
	
	/*get a user by id*/
	public User getUser(Long userId) {
		return userRepository.findOne(userId);
	}

	/*to update a user*/
	public User updateUser(User userData, long id) {
		if(userRepository.findOne(id)==null) {
			return null;
		}
		return userRepository.save(userData);
	}
	
	/*delete a user*/
	public boolean deleteUser(Long userId) {
		if(userRepository.findOne(userId)==null) {
			return false;
		}
		userRepository.delete(userId);
		return true;
	}
	
	
}
