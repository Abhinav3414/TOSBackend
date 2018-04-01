package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tos.model.Action;
import com.tos.model.Employee;
import com.tos.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	/* search all employees*/
	public List<Employee> getAllEmployee() {
		return employeeRepository.findAll();
	}
	
	/*to save an employee*/
	public Employee addEmployee(Employee emp) {
		return employeeRepository.save(emp);
	}
	
	/*get an employee by id*/
	public Employee getEmployee(Long empId) {
		return employeeRepository.findOne(empId);
	}

	/*to update an employee*/
	public Employee updateEmployee(Employee emp, long id) {
		if(employeeRepository.findOne(id)==null) {
			return null;
		}
		return employeeRepository.save(emp);
	}
	
	/*delete an employee*/
	public boolean deleteEmployee(Long empId) {
		if(employeeRepository.findOne(empId)==null) {
			return false;
		}
		employeeRepository.delete(empId);
		return true;
	}
	
	
}
