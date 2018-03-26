package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

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
		employeeRepository.save(emp);
		return employeeRepository.findOne(emp.getId());
	}
	
	/*get an employee by id*/
	public Employee getEmployee(Long empId) {
		return employeeRepository.findOne(empId);
	}

	/*to update an employee*/
	public ResponseEntity<Employee> updateEmployee(Employee emp, long id) {
		Employee employee=employeeRepository.findOne(id);
		if(employee==null) {
			return ResponseEntity.notFound().build();
		}
		Employee updateEmployee=employeeRepository.save(emp);
		return ResponseEntity.ok().body(updateEmployee);
	}
	
	/*delete an employee*/
	public Employee deleteEmployee(Long empId) {
		Employee emp = employeeRepository.findOne(empId);
		employeeRepository.delete(empId);
		return emp;
	}
}
